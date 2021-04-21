# express-calculators

Practice creating front-end and back-end, creating calculators

### Topics Covered

1. Responding with HTML files

### `Step 1`

Use respond.sendFile()
* __dirname is a constant that will with return string of pwd

```javascript
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
```

### `Step 2`

If using form than action needs to get changed to "/"
* To instead send form data to the server
* Sends data to "home route" -> "/"
* Gives home route "server" access to data

```javascript
<form action="index.html"></form>
// Change to this
<form action="\"></form>
```

### `Step 3`

Add app.post() method

```javascript
app.post("/", function(req, res){
    res.send("Thanks for posting that!");
})
```

### `Step 4`

Run `npm install body-parser` command
* Adds body-parser dependency


## `Other Notes`

HTTP codes cheat sheet:

1. Hold on
2. Here you go
3. Go away (Security)
4. You fucked up (error)
5. I fucked up (error)