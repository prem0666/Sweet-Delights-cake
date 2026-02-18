import React from "react";
import { useproduct } from "../context/ProductList";
import Api from "../api/Api";
import { toast } from "sonner";

const PoductView = () => {
  const { setShowProductView ,setProducts } = useproduct();
  const fileInputRef = React.useRef(null);

  const [form, setForm] = React.useState({
    name: "",
    price: "",
    category: "",
    Description: "",
    imageUrl: null,
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      imageUrl: e.target.files[0],
    }));
  };
  

  const handleSubmit = async (e) => {
e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("Description", form.Description);
    // Assuming you have an input for image file and it's stored in form.imageFile
    formData.append("imageUrl", form.imageUrl);


    console.log(formData);

    if (!form.imageUrl) {
      toast.error("Please attach a reference image.");
      return;
    }

    e.preventDefault();

    try {
      await Api.post("/products", formData);
      console.log("Submitting form:", form);
      setProducts(prev => [...prev, { ...form, imageUrl: URL.createObjectURL(form.imageUrl) }]);

      toast.success("Product added successfully!");
      setForm({
        name: "",
        price: "",
        category: "",
        Description: "",
        imageUrl: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || err.message || "Failed to add product",);
    }
    finally{
      setShowProductView(false);
    }
  };



  return (
    <>
      <div
        onClick={() => setShowProductView(false)}
        className="fixed inset-0 z-50 bg-black/80 "
      ></div>

      <div
        className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg max-w-md"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            Add New Product
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Product Name *
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Chocolate Cake"
              value={form.name}
              onChange={handlechange}
              name="name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Price (₹) *
            </label>
            <input
              type="number"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="1000"
              value={form.price}
              onChange={handlechange}
              name="price"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none flex flex-col ">
              Category *
            </label>
        
            <select
              name="category"
              value={form.category}
              onChange={handlechange}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
              className="my-4 rounded-md px-4 py-2 text-sm border-input border  text-muted-foreground  ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value=""> select </option>
              <option value="birthday" >
                Birthday
              </option>
              <option value="wedding">Wedding</option>
              <option value="custom">Custom</option>
              <option value="cupcakes">Cupcakes</option>
              <option value="pastries">Pastries</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Description *
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Delicious cake with..."
              rows="3"
              value={form.Description}
              onChange={handlechange}
              name="Description"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Image URL
            </label>
            <label className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition block">
                  <div className="space-y-2">
                    {form.imageUrl ? (
                      <>
                        <p className="text-sm font-medium text-green-600">
                          ✅ {form.imageUrl.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(form.imageUrl.size / 1024).toFixed(2)} KB
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="imageUrl"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gradient-primary"
            type="submit"
          >
            Add Product
          </button>
        </form>
        <button
          type="button"
          onClick={() => setShowProductView(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity  hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
           
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
};

export default PoductView;
