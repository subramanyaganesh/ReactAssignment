import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [doorBells, setDoorBells] = useState([
    {
      id: "DoorBell1",
      name: "DoorBell1",
      price: 349.99,
      image: "db1.jpg",
      description: "This is doorbell1",
      manufacturer: "amazon",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
      accessories: ["modulator", "smartScrew", "smartwire", "DBWarranty5"],
    },
    {
      id: "DoorBell2",
      name: "DoorBell2",
      price: 399.99,
      image: "db2.jpg",
      manufacturer: "amazon",
      description: "This is doorbell2",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
      accessories: ["smartRemote", "wifiModule", "repeater"],
    },
    {
      id: "DoorBell3",
      name: "DoorBell3",
      price: 439.99,
      image: "db3.jpg",
      manufacturer: "arlo",
      description: "This is doorbell3",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
      accessories: ["holder", "cover", "assembler"],
    },
    {
      id: "DoorBell4",
      name: "DoorBell4",
      price: 934.99,
      image: "db4.jpg",
      manufacturer: "arlo",
      description : "This is doorbell4",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
      accessories: ["DBWarranty1", "DBWarranty2", "DBWarranty3"],
    },
    {
      id: "DoorBell5",
      name: "DoorBell5",
      price: 341.99,
      image: "db5.jpg",
      manufacturer: "nestHello",
      description : "This is doorbell5",
      condition: "New",
      discount: 15.0,
      type: "doorBell",
      accessories: ["miscellaneous", "DB4Beautifier", "DBWarranty4"],
    },
  ]);

  let [doorLocks, setDoorLocks] = useState([
    {
      id: "g1",
      name: "Door Lock 1",
      price: 50.99,
      image: "dl1.jpg",
      manufacturer: "Amazon",
      description: "This is doorlock1",
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
      description: "This is doorlock2",
      condition: "Refurbished",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g3",
      name: "Door Lock 3",
      price: 50.99,
      image: "dl3.jpg",
      description: "This is doorlock3",
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
      description: "This is doorlock4",
      discount: 15.0,
      type: "doorLock",
    },
    {
      id: "g5",
      name: "Door Lock 5",
      price: 50.99,
      image: "dl5.jpg",
      manufacturer: "Hornbill",
      description: "This is doorlock5",
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
      description: "This is lighting1",
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
      description: "This is lighting2",
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
      description: "This is lighting3",
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
      description: "This is lighting4",
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
      description: "This is lighting5",
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
      description: "This is speaker1",
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
      description: "This is speaker2",
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
      description: "This is speaker3",
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
      description: "This is speaker4",
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
      description: "This is speaker5",
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
      description: "This is thermostat1",
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
      description: "This is thermostat2",
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
      description: "This is thermostat3",
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
      description: "This is thermostat4",
      discount: 15.0,
      type: "thermostat",
    },
    {
      id: "ts5",
      name: "Thermostat 5",
      price: 150.99,
      image: "ts5.jpg",
      manufacturer: "Seimens",
      description: "This is thermostat5",
      condition: "New",
      discount: 15.0,
      type: "thermostat",
    },
  ]);

  let [accessories] = useState([
    {
      id: "modulator",
      name: "Modulator",
      price: 89.99,
      image: "modulator.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "smartScrew",
      name: "Smart Screws",
      price: 89.99,
      image: "smartScrew.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "smartwire",
      name: "Smart Wire",
      price: 89.99,
      image: "smartwire.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "smartRemote",
      name: "Smart Remote",
      price: 89.99,
      image: "smartRemote.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "wifiModule",
      name: "Wifi Module",
      price: 89.99,
      image: "wifiModule.jpeg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "repeater",
      name: "Repeater",
      price: 89.99,
      image: "repeater.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "holder",
      name: "Smart Holder",
      price: 89.99,
      image: "holder.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "cover",
      name: "Smart Cover",
      price: 89.99,
      image: "cover.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "assembler",
      name: "Smart Assembler",
      price: 89.99,
      image: "assembler.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "doorBell2Warranty",
      name: "DBWarranty2",
      price: 89.99,
      image: "doorBell2Warranty.jpg",
      manufacturer: "Amazon",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "Db1Warranty",
      name: "DBWarranty1",
      price: 89.99,
      image: "Db1Warranty.jpg",
      manufacturer: "Microsoft",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "Db3Warranty",
      name: "DBWarranty3",
      price: 89.99,
      image: "Db3Warranty.jpg",
      manufacturer: "NestHello",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "miscellaneous",
      name: "Miscellaneous",
      price: 89.99,
      image: "miscellaneous.jpg",
      manufacturer: "Arlo",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "DB4Beautifier",
      name: "DB4Beautifier",
      price: 89.99,
      image: "DB4Beautifier.jpeg",
      manufacturer: "Arlo",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "DBWarranty4",
      name: "DBWarranty4",
      price: 89.99,
      image: "DB4Warranty.jpg",
      manufacturer: "Arlo",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
    {
      id: "DBWarranty5",
      name: "DBWarranty5",
      price: 89.99,
      image: "DB5Warranty.jpg",
      manufacturer: "Arlo",
      condition: "New",
      discount: 40.0,
      type: "accessories",
    },
  ]);

  // Add other accessories similarly

  const deleteProduct = (item) => {
    let temp = [];
    if (doorBells.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())) {
      temp = doorBells.filter(
        (db) => db.id.toLowerCase() !== item.toLowerCase()
      );
      setDoorBells(temp);
    } else if (
      doorLocks.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())
    ) {
      temp = doorLocks.filter(
        (db) => db.id.toLowerCase() !== item.toLowerCase()
      );
      setDoorLocks(temp);
    } else if (
      lightings.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())
    ) {
      temp = lightings.filter(
        (db) => db.id.toLowerCase() !== item.toLowerCase()
      );
      setLightings(temp);
    } else if (
      speakers.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())
    ) {
      temp = speakers.filter(
        (db) => db.id.toLowerCase() !== item.toLowerCase()
      );
      setSpeakers(temp);
    } else if (
      thermostats.map((a) => a.id.toLowerCase()).includes(item.toLowerCase())
    ) {
      temp = thermostats.filter(
        (db) => db.id.toLowerCase() !== item.toLowerCase()
      );
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
        setDoorBells([
          ...doorBells.filter(
            (db) => db.id.toLowerCase() !== item.id.toLowerCase()
          ),
          item,
        ]);
        break;
      case "doorLock":
        setDoorLocks([
          ...doorLocks.filter(
            (db) => db.id.toLowerCase() !== item.id.toLowerCase()
          ),
          item,
        ]);
        break;
      case "lighting":
        setLightings([
          ...lightings.filter(
            (db) => db.id.toLowerCase() !== item.id.toLowerCase()
          ),
          item,
        ]);
        break;
      case "speaker":
        setSpeakers([
          ...speakers.filter(
            (db) => db.id.toLowerCase() !== item.id.toLowerCase()
          ),
          item,
        ]);
        break;
      case "thermostat":
        setThermostats([
          ...thermostats.filter(
            (db) => db.id.toLowerCase() !== item.id.toLowerCase()
          ),
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
        accessories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
