const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express();
app.use(express.json()); 
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/Test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  
  const db = mongoose.connection; // Get the connection object
  
  db.once('open', () => {
    console.log('Database connected');
  });

  const OrderSchema=new mongoose.Schema({
            Name: {
                type:String,
                required:true
            },
            Mobileno: {
                type:Number,
                required:true
            },
            Address: {
                type:String,
                required:true
            }
            
  });

  const Items=mongoose.model('foodorder',OrderSchema)

app.get("/foodlist",(req,res) => {
    res.send("hello");
})

app.get('/foodlist', async(req,res)=>{
    const items=await Items.find();
    res.json(items);
})

app.post('/foodlist', async (req,res)=>{
    const { Name,Mobileno,Address } = req.body;
    const foodItem = new Items( { Name,Mobileno,Address }); // ✅ Include required fields
    await foodItem.save();
    res.status(201).json(foodItem);

})

const LoginSchema=new mongoose.Schema({
    Mobileno: {
        type:Number,
        required:true
    },
    Password: {
        type:String,
        required:true
    }
    
});

  
  const Login = mongoose.model("foodlogin", LoginSchema);
  
  app.post("/login", async (req, res) => {
    const { Mobileno, Password } = req.body;
    const user = await Login.findOne({ Mobileno, Password });
  
    if (user) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  });
  
  

  // ✅ Fixed POST Route
  app.post("/signup", async (req, res) => {
    try {
      const { Mobileno, Password } = req.body;
  
      if (!Mobileno || !Password) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const newUser = new Login({ Mobileno, Password });
      await newUser.save();
      
      res.status(201).json({ message: "User registered successfully!", user: newUser });
  
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
})

const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    tableNumber: Number,
  });
  
  const Booking = mongoose.model("Booking", bookingSchema);
  
  app.post("/booktable", async (req, res) => {
    const { name, phone, tableNumber } = req.body;
    try {
      const newBooking = new Booking({ name, phone, tableNumber });
      await newBooking.save();
      res.json({ success: true, message: "Table booked successfully!" });
    } catch (error) {
      res.json({ success: false, message: "Error booking table." });
    }
  });
  
app.listen(3000, ()=>{
    console.log("server running");
})