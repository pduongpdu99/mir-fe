import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const LineVisualization = ({ nn, predict }) => {
    const data = nn.map((i, id) => ({ name: `${id * 2 + 1100}_nm`, sample: i }));
    if (nn.length === 0) return (<div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Chưa có dữ liệu</h2>
    </div>);
    return (
        <div className="w-6/10 mx-auto p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Result</h3>
            <h2 className="text-xl font-bold mb-4 text-center"><b className="text-red-600">{predict}</b></h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sample" stroke="#2563EB" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineVisualization;
