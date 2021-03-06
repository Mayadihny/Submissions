const express = require("express");
const mongoose = require('mongoose');
const app= express();
const url = 'mongodb+srv://Blossom:1234@blossom-25d2b.mongodb.net/test?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser: true});

const mySchema = new mongoose.Schema ({
    title: String, 
    year: Number,
    rating: Number
})

const newSchema = mongoose.model("dataass", mySchema);

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get('/', (req, res) => {
res.send('<h1>Ok</h1>');
});

app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"});
    });
    
app.get('/time', (req, res) => {
        var time = new Date ();
        res.send({status:200, message: time.getHours() + ":"+ time.getMinutes() + ":" + time.getSeconds()});
        });
      
app.get('/hello/:id?', (req, res) =>{ 
    if(req.params.id !== undefined){ 
        res.send ({ status:200, message:"Hello," + req.params.id })} 
    else { res.send ({ status:200, message:"Hello," })}
        })     
           
app.get('/search', (req, res) =>{
    if(req.query.s !== undefined && req.query.s !== ""){
        res.send({status:200, message:"ok", data:req.query.s})}
    else { res.send({status:500, error:true, message:"you have to provide a search"})} 
        })

app.get('/movies/add?', (req, res) =>{
    var movieTitle = req.query.title;
    var movieYear = req.query.year;
    var movieRate = req.query.rating;
    if (movieTitle!=undefined && movieYear!=undefined && movieYear.length==4 && isNaN(movieYear)==false && movieRate!=undefined ){
       
        let movie = new newSchema({ title: movieTitle, year: movieYear, rating: movieRate }); // this is modal object.
        movie.save()
          .then((data)=> {
            res.send({status : 200,data :data})
           })
          .catch((err)=> {
            console.log(err);
            res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
          })}})
    //     movies.push({ title: movieTitle, year: movieYear, rating: movieRate })
    //     res.send({status : 200,data :movies})
    // }  
    // else if(movieRate==undefined){
    //     movies.push({ title: movieTitle, year: movieYear, rating: 4 })
    //     res.send({status : 200,data :movies})
    // }
    // else {
    //  res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    // }
    

app.get('/movies/read', (req, res) => {
    var User = newSchema;

    User.find({})
     .then((data)=>{
        res.send({status:200, data: data})  
      })
     .catch((err)=>{
       console.log(err);
     })
   
    // res.send({status:200, data: movies})    
});

app.get('/movies/read/by-date',(req,res)=> {
    res.send({status:200, data:movies.sort(function(a, b) { return a.year - b.year})})
 })

app.get('/movies/read/by-rating',(req,res)=> {
    res.send({status:200, data:movies.sort(function(a, b) { return a.rating - b.rating})})
 })

app.get('/movies/read/by-title',(req,res)=> {
    res.send({status:200, data:movies.sort(function(a, b) { return a.title - b.title})})
 })

 app.get('/movies/read/:id',(req,res)=> {
    if (req.params.id <movies.length){
    res.send({status:200, data:movies[req.params.id]})}
    else {res.send ({status:404, error:true, message:'the movie <ID> does not exist'})
    }
 })

// app.get('/movies/update/;id', (req, res) =>{
//     var movieTitle = req.query.title;
//     var movieYear = req.query.year;
//     var movieRate = req.query.rating;
//     var movieId = req.query.id;
//     if (movieId !== undefined) {
//         movies[movieId].title=movieTitle;
//         res.send({data:movies})
//     }
//     else if (movieId !== undefined) {
//         res.send ({movieRate = NEW_RATING && movieTitle == NEW_TITLE})
//     }
//     });

app.get('/movies/delete/:id',(req,res)=> {
    var ID = req.params.id 
    if (ID>0 && ID <= movies.length)
    { movies.splice(ID-1 ,1);
    res.send({status:200, data: movies})
}
    else {res.send ({status:404, error:true, message:'the movie'+ ID +' does not exist'})
    }
 });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
