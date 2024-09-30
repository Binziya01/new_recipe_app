export const addProductFormElements = [
    {
      label: "Name",
      name: "name",
      componentType: "input",
      type: "text",
      placeholder: "Enter the recipe",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "entrees", label: "Entrees" },
        { id: "breakfast", label: "Breakfast" },
        { id: "lunch", label: "Lunch" },
        { id: "Sides", label: "Sides" },
        { id: "Drinks", label: "Drinks" },
      ],
    },
    {
        label: "Instructions",
        name: "instructions",
        componentType: "textarea",
        placeholder: "Enter instructions",
      }
    ]
    
  