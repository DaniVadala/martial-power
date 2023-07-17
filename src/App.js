import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    title: "Judo Gi",
    id: 1,
    stock: 10,
    description: "High-quality Judo Gi made with durable and comfortable materials.",
    img: "image-path-1.jpg"
  },
  {
    title: "Boxing Gloves",
    id: 2,
    stock: 5,
    description: "Professional boxing gloves, perfect for training and competition. Made with high-resistance synthetic leather.",
    img: "image-path-2.jpg"
  },
  {
    title: "Mouth Guard",
    id: 3,
    stock: 20,
    description: "Moldable and breathable mouth guard for martial arts. Provides optimal protection during fights.",
    img: "image-path-3.jpg"
  },
  // Add more product objects here
  {
    title: "Taekwondo Pants",
    id: 4,
    stock: 15,
    description: "Specialized pants for Taekwondo practice. Comfortable and stretchy design for easy movement.",
    img: "image-path-4.jpg"
  },
  {
    title: "Punching Bag",
    id: 5,
    stock: 8,
    description: "High-resistance punching bag, ideal for intense training. Comes with chains and ceiling hook.",
    img: "image-path-5.jpg"
  },
  {
    title: "Boxing Wraps",
    id: 6,
    stock: 25,
    description: "Elastic and durable boxing wraps to protect your hands and wrists during training and fights.",
    img: "image-path-6.jpg"
  },
  // Add more product objects here
];

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting="Welcome to our premier martial arts shop, offering the finest selection of high-quality products and gear!"/>
  </div>
  );
}

export default App;
