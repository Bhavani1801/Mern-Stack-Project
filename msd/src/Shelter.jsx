import React, { useState, useEffect } from "react";

import axios from "axios";


  function Shelter() {
  const shelters = [
    {
      name: "🌸 Rose Women’s Shelter",
      city: "Hyderabad",
      location: "Hyderabad, Telangana",
      phone: "+91 98765 43210",
      beds: 25,
      img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      desc: "Provides immediate accommodation, counseling, and food facilities for women in distress."
    },
    {
      name: "🏠 Safe Haven Center",
      city: "Bengaluru",
      location: "Bengaluru, Karnataka",
      phone: "+91 91234 56789",
      beds: 40,
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      desc: "Offers 24/7 emergency support, medical care, and child-friendly spaces."
    },
    {
      name: "🌼 Shakti Women’s Refuge",
      city: "Mumbai",
      location: "Mumbai, Maharashtra",
      phone: "+91 99876 54321",
      beds: 32,
      img: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
      desc: "Specializes in providing legal aid, rehabilitation, and skill development workshops."
    },
    {
      name: "💖 Hope Women’s Center",
      city: "Delhi",
      location: "Delhi",
      phone: "+91 90123 45678",
      beds: 28,
      img: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      desc: "Focuses on rehabilitation programs, vocational training, and self-defense workshops."
    },
    {
      name: "🌺 Sakhi Support Home",
      city: "Chennai",
      location: "Chennai, Tamil Nadu",
      phone: "+91 93456 78901",
      beds: 18,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      desc: "Offers temporary housing, medical aid, and psychological support to women in crisis."
    },
    {
      name: "🌻 Nari Suraksha Kendra",
      city: "Kolkata",
      location: "Kolkata, West Bengal",
      phone: "+91 90234 87654",
      beds: 20,
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      desc: "Provides long-term shelter, vocational training, and educational support."
    },
    {
      name: "🏡 Saheli Women’s Shelter",
      city: "Pune",
      location: "Pune, Maharashtra",
      phone: "+91 93567 89012",
      beds: 30,
      img: "https://images.unsplash.com/photo-1597047084897-51e81819a499",
      desc: "Dedicated to helping women rebuild their lives with counseling and skill development."
    },
    {
      name: "🌸 Aasra Women’s Refuge",
      city: "Ahmedabad",
      location: "Ahmedabad, Gujarat",
      phone: "+91 92345 67890",
      beds: 15,
      img: "https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      desc: "Specializes in providing immediate crisis response and rehabilitation support."
    },
    {
      name: "✨ Umeed Women’s Home",
      city: "Lucknow",
      location: "Lucknow, Uttar Pradesh",
      phone: "+91 94567 12345",
      beds: 22,
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      desc: "Supports women with medical facilities, legal aid, and safe housing."
    },
    {
      name: "🌹 Sharan Women’s Shelter",
      city: "Jaipur",
      location: "Jaipur, Rajasthan",
      phone: "+91 98712 34567",
      beds: 35,
      img: "https://media.istockphoto.com/id/2161170654/photo/scandinavian-style-bedroom-interior-of-empty-place-with-chic-bed-white-ball-chandelier-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=bmAnmlC0-7llpNstYDpFm8BETKk9ABQD2T04KLbEBds=",
      desc: "Provides legal assistance, emotional support, and community outreach programs."
    },
{
  name: "💫 Swayam Women's Home",
  city: "Visakhapatnam",
  location: "Visakhapatnam, Andhra Pradesh",
  phone: "+91 93945 67891",
  beds: 24,
  img: "https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=pJs1KNBcI5hpaLMydDTYa-tvw1TbPIYO8UtEEraMN78=",
  desc: "Provides emergency accommodation and long-term rehabilitation programs for women facing domestic violence."
},

{
  name: "🏩 Stree Nivas Care Center",
  city: "Jaipur",
  location: "Jaipur, Rajasthan",
  phone: "+91 94433 11223",
  beds: 26,
  img: "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJeW83B-wUlivdf2ciNAlRAV07aRr03xT-OfpQvwktg=",
  desc: "Offers temporary shelter, medical counseling, and vocational training for self-dependence."
},
{
  name: "🌷 Asha Jyoti Shelter Home",
  city: "Patna",
  location: "Patna, Bihar",
  phone: "+91 97777 65432",
  beds: 19,
  img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  desc: "Focuses on providing legal assistance, trauma counseling, and skill development workshops."
},
{
  name: "💐 Nirmal Women’s Support Home",
  city: "Jaipur",
  location: "Jaipur, Rajasthan",
  phone: "+91 96543 21345",
  beds: 20,
  img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  desc: "Supports women with housing, food, and mental health counseling in a peaceful environment."
},
{
  name: "🌼 Prerna Safe House",
  city: "Nagpur",
  location: "Nagpur, Maharashtra",
  phone: "+91 93444 22110",
  beds: 27,
  img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  desc: "Provides a safe and secure environment for women escaping abusive situations with 24/7 helpline support."
},
{
  name: "🏡 Suraksha Women’s Care Center",
  city: "Guwahati",
  location: "Guwahati, Assam",
  phone: "+91 98112 34560",
  beds: 22,
  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  desc: "Offers medical aid, legal help, and vocational training programs for women in crisis."
},
{
  name: "🌸 Sneha Women’s Refuge",
  city: "Bengaluru",
  location: "Bengaluru, Karnataka",
  phone: "+91 94949 56789",
  beds: 30,
  img: "https://images.unsplash.com/photo-1667403206415-0e51a54727d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  desc: "Provides shelter and counseling for women, focusing on mental well-being and social reintegration."
},
{
  name: "🌻 Aarthi Rehabilitation Center",
  city: "Bengaluru",
  location: "Bengaluru, Karnataka",
  phone: "+91 98761 11223",
  beds: 25,
  img: "https://images.unsplash.com/photo-1698752160677-7e112b18e5a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  desc: "Assists women in distress by providing legal support, food, and education programs."
},
{
  name: "🌹 Nari Kalyan Bhavan",
  city: "Chandigarh",
  location: "Chandigarh",
  phone: "+91 90123 45679",
  beds: 32,
  img: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
  desc: "Runs comprehensive rehabilitation programs, healthcare facilities, and counseling support."
},
{
  name: "💖 Ujjwala Women’s Protection Center",
  city: "Ranchi",
  location: "Ranchi, Jharkhand",
  phone: "+91 93333 78945",
  beds: 18,
  img: "https://images.unsplash.com/photo-1597047084897-51e81819a499",
  desc: "Focuses on rescue and rehabilitation of women, with training in self-employment skills."
}

  ];

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const filteredShelters = shelters.filter(
    (s) =>
      (city === "All" || s.city === city) &&
      s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBook = (shelter) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("⚠️ Please login before booking a shelter.");
      window.location.href = "/login";
      return;
    }
    setSelectedShelter(
      selectedShelter && selectedShelter.name === shelter.name ? null : shelter
    );
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate) {
      alert("Please select a date first!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.post("http://localhost:3030/book-shelter", {
        username: user.username,
        shelterName: selectedShelter.name,
        date: selectedDate,
      });
      alert(`✅ Shelter booked successfully for ${selectedDate}!`);
      setSelectedShelter(null);
      setSelectedDate("");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Try again.");
    }
  };

  return (
    <div className="shelters">
      <section className="shelters-hero">
        <h1>Safe Shelters</h1>
        <p>
          Find safe spaces and shelters near you. All shelters listed are
          verified and dedicated to providing protection, comfort, and support.
        </p>

        <div className="shelter-filters">
          <input
            type="text"
            placeholder="🔍 Search by shelter name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="All">All Cities</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Kerala">Kerala</option>
          </select>
        </div>
      </section>

      <section className="shelters-list">
        {filteredShelters.length > 0 ? (
          filteredShelters.map((shelter, index) => (
            <div key={index} className="shelter-card">
              <img src={shelter.img} alt={shelter.name} />
              <h3>{shelter.name}</h3>
              <p>📍 {shelter.location}</p>
              <p>☎ {shelter.phone}</p>
              <p>🛏 Beds Available: {shelter.beds}</p>
              <p>{shelter.desc}</p>

              {/* Book Shelter Button */}
              <button className="book-btn" onClick={() => handleBook(shelter)}>
                {selectedShelter && selectedShelter.name === shelter.name
                  ? "Cancel"
                  : "🗓️ Book Shelter"}
              </button>

              {/* Inline Booking Section (only for logged-in users) */}
              {selectedShelter &&
                selectedShelter.name === shelter.name && (
                  <div className="inline-booking" style={{ marginTop: "10px" }}>
                    <label>
                      Select Date:{" "}
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        style={{
                          marginLeft: "8px",
                          padding: "5px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                        }}
                      />
                    </label>
                    <div style={{ marginTop: "8px" }}>
                      <button
                        onClick={handleConfirmBooking}
                        style={{
                          backgroundColor: "#007BFF",
                          color: "white",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginRight: "8px",
                        }}
                      >
                        Confirm Booking
                      </button>
                      <button
                        onClick={() => setSelectedShelter(null)}
                        style={{
                          backgroundColor: "#ccc",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
            </div>
          ))
        ) : (
          <p className="no-results">No shelters found for your search.</p>
        )}
      </section>
    </div>
  );
}

export default Shelter;