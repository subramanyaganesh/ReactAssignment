import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [doorBells, setDoorBells] = useState([
    {
      id: "DoorBell1",
      name: "DoorBell1",
      price: 349.99,
      image: "db1.jpg",
      manufacturer: "amazon",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
    },
    {
      id: "DoorBell2",
      name: "DoorBell2",
      price: 399.99,
      image: "db2.jpg",
      manufacturer: "amazon",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
    },
    {
      id: "DoorBell3",
      name: "DoorBell3",
      price: 439.99,
      image: "db3.jpg",
      manufacturer: "arlo",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
    },
    {
      id: "DoorBell4",
      name: "DoorBell4",
      price: 934.99,
      image: "db4.jpg",
      manufacturer: "arlo",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
    },
    {
      id: "DoorBell5",
      name: "DoorBell5",
      price: 341.99,
      image: "db5.jpg",
      manufacturer: "nestHello",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
    },
  ]);

  let [doorLocks, setDoorLocks] = useState([
    {
      id: "g1",
      name: "Door Lock 1",
      price: 50.99,
      image: "dl1.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g2",
      name: "Door Lock 2",
      price: 50.99,
      image: "dl2.jpg",
      manufacturer: "Amazon",
      condition: "Refurbished",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g3",
      name: "Door Lock 3",
      price: 50.99,
      image: "dl3.jpg",
      manufacturer: "Lockly",
      condition: "New",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g4",
      name: "Door Lock 4",
      price: 50.99,
      image: "dl4.jpg",
      manufacturer: "Hornbill",
      condition: "New",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g5",
      name: "Door Lock 5",
      price: 50.99,
      image: "dl5.jpg",
      manufacturer: "Hornbill",
      condition: "New",
      discount: 15.0,
      type: "doorLock",
    },
  ]);

  let [lightings, setLightings] = useState([
    {
      id: "l1",
      name: "Lighting 1",
      price: 189.99,
      image: "l1.jpg",
      manufacturer: "HoneyWell",
      condition: "New",
      discount: 40.0,
      type: "lighting",
    },
    {
      id: "l2",
      name: "Lighting 2",
      price: 189.99,
      image: "l2.jpg",
      manufacturer: "HoneyWell",
      condition: "Used",
      discount: 20.0,
      type: "lighting",
    },
    {
      id: "l3",
      name: "Lighting 3",
      price: 299.99,
      image: "l3.jpg",
      manufacturer: "Toshiba",
      condition: "New",
      discount: 15.0,
      type: "lighting",
    },
    {
      id: "l4",
      name: "Lighting 4",
      price: 299.99,
      image: "l4.jpg",
      manufacturer: "Toshiba",
      condition: "New",
      discount: 15.0,
      type: "lighting",
    },
    {
      id: "l5",
      name: "Lighting 5",
      price: 150.99,
      image: "l5.jpg",
      manufacturer: "GE",
      condition: "New",
      discount: 15.0,
      type: "lighting",
    },
  ]);

  let [speakers, setSpeakers] = useState([
    {
      id: "sk1",
      name: "Speaker 1",
      price: 189.99,
      image: "sk1.jpg",
      manufacturer: "Apple",
      condition: "New",
      discount: 40.0,
      type: "speaker",
    },
    {
      id: "sk2",
      name: "Speaker 2",
      price: 189.99,
      image: "sk2.jpg",
      manufacturer: "Apple",
      condition: "Used",
      discount: 20.0,
      type: "speaker",
    },
    {
      id: "sk3",
      name: "Speaker 3",
      price: 299.99,
      image: "sk3.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0,
      type: "speaker",
    },
    {
      id: "sk4",
      name: "Speaker 4",
      price: 299.99,
      image: "sk4.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0,
      type: "speaker",
    },
    {
      id: "sk5",
      name: "Speaker 5",
      price: 150.99,
      image: "sk5.jpg",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0,
      type: "speaker",
    },
  ]);

  let [thermostats, setThermostats] = useState([
    {
      id: "ts1",
      name: "Thermostat 1",
      price: 189.99,
      image: "ts1.jpg",
      manufacturer: "GoogleNest",
      condition: "New",
      discount: 40.0,
      type: "thermostat",
    },
    {
      id: "ts2",
      name: "Thermostat 2",
      price: 189.99,
      image: "ts2.jpg",
      manufacturer: "GoogleNest",
      condition: "Used",
      discount: 20.0,
      type: "thermostat",
    },
    {
      id: "ts3",
      name: "Thermostat 3",
      price: 299.99,
      image: "ts3.jpg",
      manufacturer: "HoneyWell",
      condition: "New",
      discount: 15.0,
      type: "thermostat",
    },
    {
      id: "ts4",
      name: "Thermostat 4",
      price: 299.99,
      image: "ts4.jpg",
      manufacturer: "HoneyWell",
      condition: "New",
      discount: 15.0,
      type: "thermostat",
    },
    {
      id: "ts5",
      name: "Thermostat 5",
      price: 150.99,
      image: "ts5.jpg",
      manufacturer: "Seimens",
      condition: "New",
      discount: 15.0,
      type: "thermostat",
    },
  ]);

  const deleteProduct = (item) => {
    let temp = [];
    if (doorBells.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = doorBells.filter((db) => db.id.toLowerCase() !== item.toLowerCase());
      setDoorBells(temp);
    } else if (doorLocks.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = doorLocks.filter((db) => db.id.toLowerCase() !== item.toLowerCase());
      setDoorLocks(temp);
    } else if (lightings.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = lightings.filter((db) => db.id.toLowerCase() !== item.toLowerCase());
      setLightings(temp);
    } else if (speakers.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = speakers.filter((db) => db.id.toLowerCase() !== item.toLowerCase());
      setSpeakers(temp);
    } else if (thermostats.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = thermostats.filter((db) => db.id.toLowerCase() !== item.toLowerCase());
      setThermostats(temp);
    }
  };

  const addProduct = (item) => {
    switch (item.type) {
      case "doorBell":
        setDoorBells([...doorBells, item]);
        break;
      case "doorLock":
        setDoorLocks([...doorLocks, item]);
        break;
      case "lighting":
        setLightings([...lightings, item]);
        break;
      case "speaker":
        setSpeakers([...speakers, item]);
        break;
      case "thermostat":
        setThermostats([...thermostats, item]);
        break;
      default:
        console.log("Error in addProduct");
    }
  };

  const updateProduct = (item) => {
    switch (item.type) {
      case "doorBell":
        setDoorBells([...doorBells.filter((db) => db.id.toLowerCase() !== item.id.toLowerCase()), item]);
        break;
      case "doorLock":
        setDoorLocks([...doorLocks.filter((db) => db.id.toLowerCase() !== item.id.toLowerCase()), item]);
        break;
      case "lighting":
        setLightings([...lightings.filter((db) => db.id.toLowerCase() !== item.id.toLowerCase()), item]);
        break;
      case "speaker":
        setSpeakers([...speakers.filter((db) => db.id.toLowerCase() !== item.id.toLowerCase()), item]);
        break;
      case "thermostat":
        setThermostats([
          ...thermostats.filter((db) => db.id.toLowerCase() !== item.id.toLowerCase()),
          item,
        ]);
        break;
      default:
        console.log("Error in updating product");
    }
  };

  return (
    <DataContext.Provider
      value={{
        addProduct,
        updateProduct,
        deleteProduct,
        doorBells,
        doorLocks,
        lightings,
        speakers,
        thermostats,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
