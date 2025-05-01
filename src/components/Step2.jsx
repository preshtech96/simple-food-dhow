import React, { useState } from "react";

const Step2 = () => {
  const [selected, setSelected] = useState("Pizza");

  const menu = {
    Pizza: [
      {
        name: "Ivan Torres",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$80 / $69`,
        id: "1",
      },
      {
        name: "Getty",
        img: "https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$80 / $69`,
        id: "2",
      },
      {
        name: "Melody",
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$120 / $89`,
        id: "3",
      },
      {
        name: "Preshtech",
        img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$60 / $61`,
        id: "4",
      },
      {
        name: "BBC",
        img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "5",
      },
      {
        name: "gajhhb",
        img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "6",
      },
    ],
    Salad: [
      {
        name: "Greek Salad",
        img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "1",
      },
      {
        name: "Caesar Salad",
        img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "2",
      },
      {
        name: "Garden Salad",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "3",
      },
      {
        name: "Garden Salad",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "4",
      },
      {
        name: "Garden Salad",
        img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "5",
      },
      {
        name: "Garden Salad",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "6",
      },
    ],
    Noodles: [
      {
        name: "Chow Mein",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "1",
      },
      {
        name: "Pad Thai",
        img: "https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "2",
      },
      {
        name: "House",
        img: "https://images.unsplash.com/photo-1607328874071-45a9cd600644?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "3",
      },
      {
        name: "Ramen",
        img: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "4",
      },
      {
        name: "RaNancymen",
        img: "https://images.unsplash.com/photo-1605311525808-ea0daef137b7?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "5",
      },
      {
        name: "henry",
        img: "https://images.unsplash.com/photo-1553621043-f607bfbf6640?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam laborum hic quaerat at veritatis. Aperiam temporibus tenetur sint at ipsam. Voluptate ratione reiciendis magni? Nemo deserunt commodi temporibus impedit repellat.`,
        price: `$20 / $19`,
        id: "6",
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex justify-center text-center">
        Welcome to Simple House
      </h1>
      <p className="mb-6 text-gray-600 flex justify-center text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo quae
        odio illo, <br />
        impedit quos atque ab dolorem neque culpa perspiciatis vitae sapiente
        sed. <br />
        Sed blanditiis culpa illo consequatur libero?
      </p>

      <div className="space-x-4 mb-8 flex justify-center">
        <button
          onClick={() => setSelected("Pizza")}
          className={`cursor-pointer px-4 py-2 rounded transition border ${
            selected === "Pizza"
              ? "bg-green-600 text-white border-green-600"
              : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
          }`}
        >
          Pizza
        </button>
        <button
          onClick={() => setSelected("Salad")}
          className={`cursor-pointer px-4 py-2 rounded transition border ${
            selected === "Salad"
              ? "bg-green-600 text-white border-green-600"
              : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
          }`}
        >
          Salad
        </button>
        <button
          onClick={() => setSelected("Noodles")}
          className={`cursor-pointer px-4 py-2 rounded transition border ${
            selected === "Noodles"
              ? "bg-green-600 text-white border-green-600"
              : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
          }`}
        >
          Noodles
        </button>
      </div>

      <div className="text-xl font-semibold mb-4 flex justify-center">
        {selected}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menu[selected].map((item) => (
          <div
            key={item.id}
            className="shadow-md rounded-lg p-4 border border-gray-200"
          >
            <img
              className="w-full h-48 object-cover rounded"
              src={item.img}
              alt={item.name}
            />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            {item.details && (
              <p className="text-blue-950 text-sm mt-1">{item.details}</p>
            )}
            {item.price && (
              <p className="text-indigo-600 font-semibold mt-2">{item.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
