interface Pallet {
  id: number;
  width: number;
  height: number;
  depth: number;
}

interface Equipment {
  id: number;
  name: string;
  width: number;
  height: number;
  depth: number;
}

// Equipment types with dimensions (width, height, depth)
const equipmentTypes: Equipment[] = [
  { id: 1, name: "53' Dry Van", width: 100, height: 150, depth: 100 },
  { id: 2, name: "26' Box Truck", width: 200, height: 200, depth: 150 },
  { id: 3, name: "24' Box Truck", width: 300, height: 250, depth: 200 },
  { id: 4, name: "24' Sprinter Van", width: 69, height: 64, depth: 200 },
];

function fitsInEquipment(pallet: Pallet, equipment: Equipment): boolean {
  return (
    pallet.width <= equipment.width &&
    pallet.height <= equipment.height &&
    pallet.depth <= equipment.depth
  );
}

function findSuitableEquipment(pallets: Pallet[]): Equipment | null {
  for (const equipment of equipmentTypes) {
    let allPalletsFit = true;

    for (const pallet of pallets) {
      if (!fitsInEquipment(pallet, equipment)) {
        allPalletsFit = false;
        break;
      }
    }

    if (allPalletsFit) {
      return equipment;
    }
  }

  return null;
}

// Example usage
const userInput: Pallet[] = [
  { id: 1, width: 80, height: 120, depth: 90 },
  { id: 2, width: 90, height: 130, depth: 80 },
];

const suitableEquipment = findSuitableEquipment(userInput);

if (suitableEquipment) {
  console.log("The pallets will fit in: " + suitableEquipment.name);
} else {
  console.log("No suitable equipment found for the given pallet dimensions.");
}
