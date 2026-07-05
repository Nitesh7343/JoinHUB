import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import { toast } from "react-toastify";

const OrganizeSession = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [mode, setMode] = useState("Online");
  const navigate = useNavigate(); 
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
  const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  date: "",
  startTime: "",
  endTime: "",
  venue: "",
  maxParticipants: "",
  price: 0,
  thumbnail: "",
});

useEffect(() => {
  if (id) {
    fetchSession();
  }
}, [id]);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const fetchSession = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `http://localhost:8000/api/sessions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const session = response.data.session;

    setFormData({
      title: session.title,
      description: session.description || "",
      category: session.category,
      date: session.date.split("T")[0],
      startTime: session.startTime,
      endTime: session.endTime || "",
      venue: session.venue || "",
      maxParticipants: session.maxParticipants,
      price: session.price,
      thumbnail: session.thumbnail || "",
    });

    setMode(session.mode);
    setIsPaid(session.price > 0);

  } catch (error) {
    console.error(error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const payload = {
  ...formData,
  mode,
  maxParticipants: Number(formData.maxParticipants),
  price: isPaid ? Number(formData.price) : 0,
  venue: mode === "Offline" ? formData.venue : "",
};

if (id) {
  await axios.put(
    `http://localhost:8000/api/sessions/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
} else {
  await axios.post(
    "http://localhost:8000/api/sessions",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

    toast.success(
  id
    ? "Session updated successfully!"
    : "Session created successfully!"
);

    navigate("/dashboard");

  } catch (error) {



toast.error(
  error.response?.data?.message ||
  "Something went wrong."
);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
  {id ? "Edit Your Session" : "Create Your Session"}
</h1>

        <p className="text-gray-500 text-lg mt-3">
  {id
    ? "Update your session details."
    : "Share your knowledge with learners around the world."}
</p>
      </div>

      <form
  onSubmit={handleSubmit}
  className="space-y-8"
>
        {/* Basic Information */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Basic Information</h2>

          <div className="space-y-4">
           <input
  type="text"
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="Session Title"
  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
/>

         <div>
  <input
    type="text"
    name="category"
    list="categories"
    value={formData.category}
    onChange={handleChange}
    placeholder="Select or type a category"
    className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
  />

  <datalist id="categories">
    <option value="Web Development" />
    <option value="App Development" />
    <option value="AI & Machine Learning" />
    <option value="Data Science" />
    <option value="DSA" />
    <option value="Programming" />
    <option value="Cyber Security" />
    <option value="Cloud Computing" />
    <option value="DevOps" />
    <option value="UI/UX Design" />
    <option value="Graphic Design" />
    <option value="Photography" />
    <option value="Video Editing" />
    <option value="Business" />
    <option value="Finance" />
    <option value="Marketing" />
    <option value="Public Speaking" />
    <option value="Music" />
    <option value="Dance" />
    <option value="Fitness" />
    <option value="Yoga" />
    <option value="Cooking" />
    <option value="Language Learning" />
    <option value="Career Guidance" />
    <option value="Other" />
  </datalist>
</div>

            <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
              rows="5"
              placeholder="Describe your session..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Schedule</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <input
  type="time"
  name="startTime"
  value={formData.startTime}
  onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <input
  type="time"
  name="endTime"
  value={formData.endTime}
  onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Session Mode */}
<div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
  <h2 className="text-xl font-semibold mb-5">Session Mode</h2>

  <div className="flex gap-4">

    <button
      type="button"
      onClick={() => setMode("Online")}
      className={`flex-1 rounded-2xl border-2 py-3 transition ${
        mode === "Online"
          ? "border-green-500 bg-green-50"
          : "border-gray-300"
      }`}
    >
      🌐 Online
    </button>

    <button
      type="button"
      onClick={() => setMode("Offline")}
      className={`flex-1 rounded-2xl border-2 py-3 transition ${
        mode === "Offline"
          ? "border-green-500 bg-green-50"
          : "border-gray-300"
      }`}
    >
      📍 Offline
    </button>

  </div>

</div>

{mode === "Offline" && (
  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-5">
      Venue
    </h2>

    <input
      type="text"
      name="venue"
      value={formData.venue}
      onChange={handleChange}
      placeholder="Enter venue address"
      className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
)}

        {/* Session Settings */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">⚙ Session Settings</h2>

          <div className="mb-8">

<label className="block mb-3 font-medium">
Maximum Participants
</label>

<input
  type="number"
  name="maxParticipants"
  value={formData.maxParticipants}
  onChange={handleChange}
placeholder="100"
className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
/>

</div>

          {/* Language */}
          <div className="mb-8">
            <label className="block mb-3 font-medium text-gray-700">
              Language
            </label>

            <select
              className="
      w-full
      border
      border-gray-300
      rounded-2xl
      px-4
      py-3
      outline-none
      focus:ring-2
      focus:ring-green-500
      "
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Hindi + English</option>
            </select>
          </div>

          {/* Session Type */}
          <div>
            <label className="block mb-4 font-medium text-gray-700">
              Session Type
            </label>

            <div className="grid md:grid-cols-2 gap-5">
              {/* FREE */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setIsPaid(false)}
                  className={`
      cursor-pointer
      rounded-2xl
      border-2
      px-4
      py-3
      transition
      ${
        !isPaid
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:border-green-300"
      }
    `}
                >
                  <h3 className="font-semibold text-base">Free</h3>

                  <p className="text-gray-500 text-sm mt-1">Anyone can join</p>
                </div>

                <div
                  onClick={() => setIsPaid(true)}
                  className={`
      cursor-pointer
      rounded-2xl
      border-2
      px-4
      py-3
      transition
      ${
        isPaid
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:border-green-300"
      }
    `}
                >
                  <h3 className="font-semibold text-base">Paid</h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Charge participants
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          {isPaid && (
            <div className="mt-8">
              <label className="block mb-3 font-medium text-gray-700">
                Session Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>

                <input
  type="number"
  name="price"
  value={formData.price}
  onChange={handleChange}
                  placeholder="499"
                  className="
            w-full
            border
            border-gray-300
            rounded-2xl
            pl-10
            pr-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-green-500
            "
                />
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-l font-semibold mb-5"> Thumbnail</h2>

          <label className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition">
            <div className="text-4xl">📷</div>

            <h3 className="font-semibold mt-4 text-l">Upload Thumbnail</h3>

            <p className="text-gray-500 text-sm mt-1">PNG, JPG or JPEG</p>

            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Learning Outcomes</h2>

          <textarea
            rows="4"
            placeholder="What participants will learn..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Prerequisites</h2>

          <textarea
            rows="3"
            placeholder="Any prerequisites..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

    {error && (
  <p className="text-red-500 font-medium">
    {error}
  </p>
)}

        {/* Submit */}
        <button
  disabled={loading}
          type="submit"
          className=" w-full  bg-green-600  text-white py-4 rounded-2xl text-lg font-semibold  hover:bg-green-700 transition shadow-lg"
        >
          {id ? "Save Changes" : "Create Session"}
        </button>
      </form>
    </div>
  );
};

export default OrganizeSession;
