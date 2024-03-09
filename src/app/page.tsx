"use client"
import axios from "axios";
import Image from "next/image";

export default function Home() {

  const buyProduct1 = async () =>{

    try{
      const response = await axios.post("/api/purchaseProduct",{
        productId: "284999"
    });

    console.log(response.data);

    window.open(response.data.checkoutUrl, "_blank");
    }catch(error){
      console.log(error);
      alert("Failed to buy plan #1");
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <button onClick={buyProduct1} className="p-3 border border-white">
        Buy Plan #1 for 41.38 INR 
     </button>
    </main>
  );
}
