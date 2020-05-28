import COLORS from "../../../../assets/colors";

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: () => COLORS.aqua,
  labelColor: () => COLORS.aqua,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "5"
  }
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => `${COLORS.aqua}`, // optional
      strokeWidth: 1
    }
  ],
  legend: [] // optional
};

const pieData = [
  {
    name: "Groceries",
    population: 4,
    color: 'salmon',
    legendFontColor: COLORS.darkblue,
    legendFontSize: 14
  },
  {
    name: "Housing",
    population: 2,
    color: '#1e90ff',
    legendFontColor: COLORS.darkblue,
    legendFontSize: 14
  },
  {
    name: "Food",
    population: 10,
    color: 'gold',
    legendFontColor: COLORS.darkblue,
    legendFontSize: 14
  },
];

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [2, 10, 2, 5, 7, 15]
    }
  ]
};

export { chartConfig, lineData, pieData, barData }