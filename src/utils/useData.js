    import { useEffect, useState } from "react";

const useData = () => {
  const [specialtyData, setspecialtyData] = useState({
    dermatology: [],
    cardiology: [],
    neurology: [],
    pediatrics: [],
    orthopedics: [],
    physician: [],
    physiotherapy: []
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://67fb6abe8ee14a542629faa5.mockapi.io/Basic_info");
        const jsonData = await response.json();
        
        setspecialtyData({
          dermatology: jsonData.filter(doc => doc.specialization === "Dermatology"),
          cardiology: jsonData.filter(doc => doc.specialization === "Cardiology"),
          neurology: jsonData.filter(doc => doc.specialization === "Neurology"),
          pediatrics: jsonData.filter(doc => doc.specialization === "Pediatrics"),
          orthopedics: jsonData.filter(doc => doc.specialization === "Orthopedics"),
          physician: jsonData.filter(doc => doc.specialization === "Physician"),
          physiotherapy: jsonData.filter(doc => doc.specialization === "Physiotherapy"),
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return specialtyData;
};

export default useData;
