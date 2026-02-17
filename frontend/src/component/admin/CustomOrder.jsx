import React from "react";
import Api from "../api/Api";
import { useEffect } from "react";
import { useState } from "react";
import { useproduct } from "../context/ProductList";
import CustomOrderView from "./CustomOrderView";

const CustomOrder = () => {
  const [data, setData] = useState([]);

  const {ShowCustomOrder ,setShowCoutomOrder}  = useproduct()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("/custom");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  const deletedData = async (id)=>{
    const confermation = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (!confermation) return;
    try {
      await Api.delete(`/custom/${id}`)
      
    } catch (error) {
      console.log(error)
    }
  }

  console.log(ShowCustomOrder)
  return (
    <>
    {ShowCustomOrder && <CustomOrderView/>}
    <div
      
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-display font-bold">
            Custom Cake Orders
          </h2>
        </div>
        <div className="rounded-lg bg-card text-card-foreground shadow-sm border-0 shadow-card">
          <div className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                      Customer
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                      Details
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                      Est. Price
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right py-4 px-4 font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr className="border-b last:border-0 hover:bg-muted/30">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.phone}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-sm">
                            <p>
                              {item.cakeSize === 800
                                ? "1kg "
                                : item.cakeSize === 1500
                                ? "2kg "
                                : "3kg "}
                              | 
                              { item.flavor === 100
                                ? " strawbwrry "
                                : item.flavor === 150
                                ? " red velvet "
                                : item.flavor === 250
                                ? " Butterscotch "
                                : item.flavor === 200
                                ? " Black Forest "
                                : " Vanilla "}
                              | 
                              {
                                item.shape === 100
                                ? " spuare"
                                : item.shape === 150
                                ? " heart"
                                : item.shape === 300
                                ? " custom shape"
                                : " rounded"
                              }
                            </p>
                            <p className="text-muted-foreground">
                              {item.message}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium">₹800</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium capitalize bg-yellow-100 text-yellow-700">
                            pending
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={()=>setShowCoutomOrder(true)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye h-4 w-4"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-10 w-10 text-green-600 hover:text-green-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-message-square h-4 w-4"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                            </button>
                            <button onClick={()=>deletedData(item._id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-10 w-10 text-destructive hover:text-destructive">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-x h-4 w-4"
                              >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default CustomOrder;
