const filters = [
  {
    filterId: "color",
    filter: "Colour",
    options: [
      {
        optionId: "red",
        option: "Red",
        isChecked: false,
      },
      {
        optionId: "blue",
        option: "Blue",
        isChecked: false,
      },
      {
        optionId: "green",
        option: "Green",
        isChecked: false,
      },
    ],
  },
  {
    filterId: "gender",
    filter: "Gender",
    options: [
      {
        optionId: "men",
        option: "Men",
        isChecked: false,
      },
      {
        optionId: "women",
        option: "Women",
        isChecked: false,
      },
    ],
  },
  {
    filterId: "price",
    filter: "Price",
    options: [
      {
        optionId: "0-250",
        option: "Rs. 0 - Rs. 250",
        isChecked: false,
      },
      {
        optionId: "251-450",
        option: "Rs. 251 - Rs. 450",
        isChecked: false,
      },
      {
        optionId: "450-X",
        option: "Rs. 450 & more",
        isChecked: false,
      },
    ],
  },
  {
    filterId: "type",
    filter: "Type",
    options: [
      {
        optionId: "polo",
        option: "Polo",
        isChecked: false,
      },
      {
        optionId: "hoodie",
        option: "Hoodie",
        isChecked: false,
      },
      {
        optionId: "basic",
        option: "Basic",
        isChecked: false,
      },
    ],
  },
];

export default filters;
