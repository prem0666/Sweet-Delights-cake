import React, { useState } from "react";
import Api from "../api/Api";

const CoustomCake = () => {
  const fileInputRef = React.useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cakeSize: 0,
    flavor: 0,
    shape: 0,
    message: "",
    image: null,
    instruction: "",
  });

  const totalPrice =
    Number(form.cakeSize || 0) +
    Number(form.flavor || 0) +
    Number(form.shape || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const postData = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.phone) {
      toast.error("Name, Email, and Phone are required.");
      return;
    }
    if (!form.image) {
      toast.error("Please attach a reference image.");
      return;
    }
    if (form.cakeSize == 0 || form.flavor == 0 || form.shape == 0) {
      toast.error("Please select Cake Size, Flavor, and Shape.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name.trim());
    formData.append("email", form.email.trim());
    formData.append("phone", form.phone.trim());
    formData.append("cakeSize", form.cakeSize);
    formData.append("flavor", form.flavor);
    formData.append("shape", form.shape);
    formData.append("message", form.message.trim());
    formData.append("instruction", form.instruction.trim());
    formData.append("image", form.image);

    setLoading(true);
    try {
      const response = await Api.post("/custom", formData);
      toast.success("Order placed successfully.");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        cakeSize: 0,
        flavor: 0,
        shape: 0,
        message: "",
        instruction: "",
        image: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || error.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmite = async (e) => {
    e.preventDefault();
    await postData();
  };

  // Removed debug/test helpers
  // console.log(setForm((prev)=>{
  //   console.log(prev)
  // }))
  return (
    <>
      <div
        className="flex flex-col items-center relative  justify-center gap-6 py-10 md:py-24  "
        style={{
          background:
            "linear-gradient(135deg, rgb(252, 217, 223), rgb(250, 242, 235), rgb(249, 242, 220))",
        }}
      >
        <div className="text-center mb-12">
          <div className="flex flex-row items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles h-6 w-6 text-primary"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>

            <div className="text-primary text-lg font-bold">
              Made Just For You
            </div>
          </div>

          <h2 className="mt-4 text-3xl mb-4 font-bold text-foreground">
            Design Your Dream Cake
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Create a unique cake that perfectly matches your vision. Fill out
            the form below and we'll bring your ideas to life!
          </p>
        </div>

        <div className="w-full ">
          <div className="max-w-3xl mx-auto bg-white   rounded-lg shadow-lg">
            <div className="border-b border-gray-200 p-6">
              <h1 className="text-2xl font-bold  flex items-center gap-2 text-foreground  px-4 py-2   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cake h-5 w-5 text-primary"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
                  <path d="M2 21h20"></path>
                  <path d="M7 8v3"></path>
                  <path d="M12 8v3"></path>
                  <path d="M17 8v3"></path>
                  <path d="M7 4h.01"></path>
                  <path d="M12 4h.01"></path>
                  <path d="M17 4h.01"></path>
                </svg>
                Custom Cake Order
              </h1>
            </div>

            <form
              onSubmit={handleSubmite}
              className="space-y-6 p-6  max-w-4xl mx-auto"
            >
              {/* BASIC INFO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name *</label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone *</label>
                  <input
                    type="tel"
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>
              </div>
              {/* SELECTS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cake Size */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cake Size *</label>
                  <select
                    onChange={handleChange}
                    name="cakeSize"
                    value={form.cakeSize}
                    className="flex h-10 w-full rounded-md border px-3 py-2 bg-background"
                  >
                    <option value="0">
                      Select size
                    </option>
                    <option value="800">1 Kg - ₹800</option>
                    <option value="1500">2 Kg - ₹1500</option>
                    <option value="2200">3 Kg - ₹2200</option>
                  </select>
                </div>
                {/* Flavor */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Flavor *</label>
                  <select
                    onChange={handleChange}
                    name="flavor"
                    value={form.flavor}
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                  >
                    <option value="0">Vanilla</option>
                    <option value="50">Chocolate (+₹50)</option>
                    <option value="100">Strawberry (+₹100)</option>
                    <option value="150">Red Velvet (+₹150)</option>
                    <option value="200">Butterscotch (+₹200)</option>
                    <option value="250">Black Forest (+₹250)</option>
                  </select>
                </div>
                {/* Shape */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Shape *</label>
                  <select
                    onChange={handleChange}
                    name="shape"
                    value={form.shape}
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                  >
                    <option value="0">Round</option>
                    <option value="100">Square (+₹100)</option>
                    <option value="150">Heart (+₹150)</option>
                    <option value="300">Custom Shape (+₹300)</option>
                  </select>
                </div>
              </div>
              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Message on Cake</label>
                <input
                  maxLength={50}
                  value={form.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Happy Birthday!"
                  className="flex h-10 w-full rounded-md border px-3 py-2"
                />
                <p className="text-xs text-muted-foreground">
                  {form.message.length}/50 characters
                </p>
              </div>
              {/* IMAGE */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Reference Image *
                </label>
                <label className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition block">
                  <div className="space-y-2">
                    {form.image ? (
                      <>
                        <p className="text-sm font-medium text-green-600">
                          ✅ {form.image.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(form.image.size / 1024).toFixed(2)} KB
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
                    name="image"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
              {/* INSTRUCTIONS */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Special Instructions
                </label>
                <textarea
                  rows="4"
                  value={form.instruction}
                  onChange={handleChange}
                  name="instruction"
                  placeholder="Any allergies, specific design details..."
                  className="flex w-full rounded-md border px-3 py-2"
                />
              </div>
              {/* PRICE */}
              <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Price
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    ₹{totalPrice}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  *Final price may vary based on customization details
                </p>
              </div>
              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="h-11 rounded-md px-8 w-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "⏳ Submitting..." : "Submit Customization Request"}
              </button>
              
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoustomCake;
