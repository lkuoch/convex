import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, Clock, DollarSign } from "lucide-react";

export function Analytics() {
  const stats = [
    {
      id: 1,
      label: "Total Visits",
      value: "45,231",
      change: "+20.1%",
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5 text-gray-600" />
    },
    {
      id: 2,
      label: "Bounce Rate",
      value: "23.5%",
      change: "-3.2%",
      isPositive: true,
      icon: <TrendingDown className="w-5 h-5 text-gray-600" />
    },
    {
      id: 3,
      label: "Active Users",
      value: "2,350",
      change: "+12.5%",
      isPositive: true,
      icon: <Users className="w-5 h-5 text-gray-600" />
    },
    {
      id: 4,
      label: "Avg. Session",
      value: "4m 32s",
      change: "+8.1%",
      isPositive: true,
      icon: <Clock className="w-5 h-5 text-gray-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-4 px-8 pb-8 ml-64">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analytics
          </h1>
          <p className="text-gray-600">
            Track your performance and metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs mt-1 ${stat.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {stat.isPositive ? "↑" : "↓"} {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>
                Your website traffic over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[
                  { id: 1, height: 65, day: "Mon" },
                  { id: 2, height: 59, day: "Tue" },
                  { id: 3, height: 80, day: "Wed" },
                  { id: 4, height: 81, day: "Thu" },
                  { id: 5, height: 56, day: "Fri" },
                  { id: 6, height: 55, day: "Sat" },
                  { id: 7, height: 40, day: "Sun" }
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex-1 bg-blue-600 rounded-t transition-all hover:bg-blue-700"
                    style={{ height: `${item.height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>
                Monthly revenue breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 1, label: "Subscriptions", amount: "$12,500", percentage: 65 },
                  { id: 2, label: "One-time", amount: "$5,200", percentage: 25 },
                  { id: 3, label: "Add-ons", amount: "$3,100", percentage: 10 }
                ].map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium text-gray-900">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">$20,800</p>
                  </div>
                  <DollarSign className="w-12 h-12 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
