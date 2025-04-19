import { Card } from "@/components/ui/card";
import React, { useMemo } from "react";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();

  const operationalExpenses = useMemo(() => {
    return (
      operationalData?.[0]?.monthlyData?.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => ({
          name: month.substring(0, 3),
          "Operational Expenses": parseFloat(
            operationalExpenses?.toString().replace(/[$,]/g, "") || 0
          ),
          "Non Operational Expenses": parseFloat(
            nonOperationalExpenses?.toString().replace(/[$,]/g, "") || 0
          ),
        })
      ) || []
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productData?.map(({ _id, price, expense }) => ({
        id: _id,
        price: parseFloat(price?.toString().replace(/[$,]/g, "") || 0),
        expense: parseFloat(expense?.toString().replace(/[$,]/g, "") || 0),
      })) || []
    );
  }, [productData]);

  return (
    <>
      {/* Operational vs Non-Operational Expenses */}
      <Card
        className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl"
        style={{ gridArea: "d" }}
      >
        <div className="pt-5">
          <h1 className="text-white text-md font-semibold">Operational vs Non-Operational Expenses</h1>
        </div>
        <div className="text-zinc-400 text-sm">
          Top line represents operational expenses,bottom line represents non-operational expenses
        </div>
        <ResponsiveContainer  width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{ top: 20, right: 0, left: -10, bottom: 60 }}
          >
             <CartesianGrid
              stroke="#ffffff33"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "12px", fontWeight: 500 }}
            />
            <YAxis 
            tickLine={false}
            style={{ fontSize: "12px", fontWeight: 500 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", color: "white" }}
            />
            <Line
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke="#f43f5e"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Operational Expenses"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Campaigns and Targets */}
      <Card
        className="bg-zinc-800 p-4 border-0 shadow-xl drop-shadow-2xl"
        style={{ gridArea: "e" }}
      >
        <h2 className="text-white text-lg mb-4">Campaigns and Targets</h2>
        <div className="flex items-center justify-between">
          <PieChart width={120} height={120}>
            <Pie
              data={pieData}
              innerRadius={30}
              outerRadius={50}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#3b82f6" : "#f43f5e"}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="text-white text-center">
            <p className="text-lg">Target Sales</p>
            <p className="text-3xl text-blue-400 font-bold">83</p>
            <p>Finance goals of the campaign</p>
          </div>
        </div>
      </Card>

      {/* Product Prices vs Expenses */}
      <Card
        className="bg-zinc-800 p-4 border-0 shadow-xl drop-shadow-2xl"
        style={{ gridArea: "f" }}
      >
        <h2 className="text-white text-lg mb-4">Product Prices vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 0 }}>
            <CartesianGrid stroke="#374151" />
            <XAxis
              type="number"
              dataKey="price"
              tick={{ fill: "white" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              tick={{ fill: "white" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip
              formatter={(v) => `$${v}`}
              contentStyle={{ backgroundColor: "#1f2937", color: "white" }}
            />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill="#f43f5e"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default Row2;
