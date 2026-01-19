import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  DollarSign,
  Package,
  Plus,
  Search,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  AlertTriangle,
  Clock,
  RefreshCw,
  MoreHorizontal,
  ChevronRight,
  Upload,
  Info,
  Book,
  Play,
  BrainCircuit,
  Database,
  FileCode,
  FileSearch,
  Scale,
  Gavel,
  ScrollText,
  FolderOpen,
  Tag,
  Sparkles,
  Zap,
  Briefcase,
  Star,
  Timer,
  MessageSquare,
  CalendarCheck,
  ClipboardList,
  Award,
  Lightbulb,
  Receipt,
  Globe2,
  Filter,
  SortAsc,
  Eye,
  Download,
  Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DashboardPage() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="flex flex-col">
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center gap-4 px-6">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
              </Button>
              <Gavel className="size-6 text-primary" />
              <div>
                <h1 className="font-semibold text-lg">LegalTech Pro</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Practice Management System</p>
              </div>
            </div>
            
            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search cases, clients, documents..."
                  className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              
              <Button variant="outline" size="icon" className="relative">
                <Bell className="size-4" />
                <span className="absolute -right-1 -top-1 size-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">3</span>
                <span className="sr-only">Notifications</span>
              </Button>
              
              <div className="h-6 w-px bg-border mx-1" />
              
              <Button variant="ghost" className="gap-2">
                <Avatar className="size-8">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Senior Attorney</p>
                </div>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">{greeting}, John!</h2>
            <p className="text-muted-foreground">
              Here's what's happening with your practice today. You have <span className="font-medium text-foreground">5 urgent tasks</span> and <span className="font-medium text-foreground">3 new messages</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                  <CardDescription className="text-xs">This month's billings</CardDescription>
                </div>
                <div className="flex items-center justify-center size-10 rounded-lg bg-blue-500/10 text-blue-600">
                  <DollarSign className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">$124,567</div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-100">
                    <TrendingUp className="size-3 mr-1" />
                    +12.5%
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">$13,892</span> vs last month
                </p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: "78%" }} />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">78% of monthly target achieved</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Cases</CardTitle>
                  <CardDescription className="text-xs">Currently handling</CardDescription>
                </div>
                <div className="flex items-center justify-center size-10 rounded-lg bg-purple-500/10 text-purple-600">
                  <Briefcase className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">47</div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-100">
                    <TrendingUp className="size-3 mr-1" />
                    +3
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">12 urgent</span> cases need attention
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-green-500 transition-all" style={{ width: "65%" }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">Civil: 31</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-orange-500 transition-all" style={{ width: "35%" }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">Criminal: 16</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Hours Billed</CardTitle>
                  <CardDescription className="text-xs">This week</CardDescription>
                </div>
                <div className="flex items-center justify-center size-10 rounded-lg bg-green-500/10 text-green-600">
                  <Clock className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">142.5</div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-100">
                    <TrendingUp className="size-3 mr-1" />
                    +8.2%
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">Target: 160 hours</span>
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-[10px] text-muted-foreground mb-1">Billable</div>
                    <div className="text-sm font-semibold text-green-600">135.2h</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-muted-foreground mb-1">Non-billable</div>
                    <div className="text-sm font-semibold text-orange-600">7.3h</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">New Clients</CardTitle>
                  <CardDescription className="text-xs">This month</CardDescription>
                </div>
                <div className="flex items-center justify-center size-10 rounded-lg bg-orange-500/10 text-orange-600">
                  <Users className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">18</div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-100">
                    <TrendingUp className="size-3 mr-1" />
                    +5
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">$28,450</span> retainer collected
                </p>
                <div className="mt-3 flex -space-x-2">
                  {["AS", "MJ", "RK", "JD", "LM"].slice(0, 4).map((initials) => (
                    <Avatar key={initials} className="size-8 border-2 border-background">
                      <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white text-[10px] font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {true && (
                    <div className="flex items-center justify-center size-8 rounded-full border-2 border-background bg-muted text-[10px] font-medium">
                      +14
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            <Card className="col-span-4 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue by Practice Area</CardTitle>
                    <CardDescription>Monthly breakdown across all practice areas</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="size-3" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <SortAsc className="size-3" />
                      Sort
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 pt-4">
                  {[
                    { category: "Corporate Law", revenue: 48500, percentage: 42, color: "bg-blue-500", cases: 12 },
                    { category: "Civil Litigation", revenue: 32100, percentage: 28, color: "bg-purple-500", cases: 18 },
                    { category: "Real Estate", revenue: 19800, percentage: 17, color: "bg-green-500", cases: 9 },
                    { category: "Family Law", revenue: 10500, percentage: 9, color: "bg-orange-500", cases: 8 },
                    { category: "Intellectual Property", revenue: 4667, percentage: 4, color: "bg-pink-500", cases: 3 },
                  ].map((item) => (
                    <div key={`revenue-${item.category}`} className="group">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`size-2 rounded-full ${item.color}`} />
                          <span className="font-medium group-hover:text-primary transition-colors">{item.category}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{item.cases} cases</span>
                          <span className="font-semibold">${item.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted/50">
                        <div
                          className={`h-full ${item.color} transition-all duration-1000 ease-out group-hover:brightness-110`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Total Revenue:</span>
                    <span className="ml-2 font-semibold text-lg">$115,567</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ArrowUpRight className="size-3" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequent tasks at your fingertips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-blue-100 text-blue-600">
                      <Plus className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">New Case</div>
                      <div className="text-xs text-muted-foreground">Create intake</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-purple-100 text-purple-600">
                      <FileText className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Upload Doc</div>
                      <div className="text-xs text-muted-foreground">Add to case</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-green-100 text-green-600">
                      <Calendar className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Schedule</div>
                      <div className="text-xs text-muted-foreground">Set hearing</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-orange-100 text-orange-600">
                      <Timer className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Track Time</div>
                      <div className="text-xs text-muted-foreground">Start timer</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-cyan-100 text-cyan-600">
                      <Receipt className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Invoice</div>
                      <div className="text-xs text-muted-foreground">Generate bill</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto flex-col gap-2 py-4 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-pink-100 text-pink-600">
                      <Users className="size-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Client</div>
                      <div className="text-xs text-muted-foreground">Add contact</div>
                    </div>
                  </Button>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full gap-2">
                    <Sparkles className="size-4" />
                    AI Assistant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="col-span-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>Latest billing activities and payments</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">All Invoices</Button>
                    <Button size="sm" className="gap-1">
                      <Receipt className="size-3" />
                      Create Invoice
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      client: "Acme Corporation",
                      case: "Merger Agreement #2847",
                      invoice: "INV-2024-1247",
                      amount: "$12,450.00",
                      status: "Paid",
                      date: "Dec 14, 2024",
                      avatar: "AC",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      client: "Johnson Family Trust",
                      case: "Estate Planning",
                      invoice: "INV-2024-1246",
                      amount: "$8,200.00",
                      status: "Pending",
                      date: "Dec 13, 2024",
                      avatar: "JT",
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      client: "TechStart Inc.",
                      case: "IP Protection",
                      invoice: "INV-2024-1245",
                      amount: "$15,800.00",
                      status: "Overdue",
                      date: "Dec 11, 2024",
                      avatar: "TS",
                      color: "from-orange-500 to-orange-600"
                    },
                    {
                      client: "MediCare Plus",
                      case: "Contract Review",
                      invoice: "INV-2024-1244",
                      amount: "$6,350.00",
                      status: "Paid",
                      date: "Dec 10, 2024",
                      avatar: "MC",
                      color: "from-green-500 to-green-600"
                    },
                    {
                      client: "Sarah Mitchell",
                      case: "Divorce Settlement",
                      invoice: "INV-2024-1243",
                      amount: "$4,750.00",
                      status: "Pending",
                      date: "Dec 9, 2024",
                      avatar: "SM",
                      color: "from-pink-500 to-pink-600"
                    },
                  ].map((invoice) => (
                    <div key={invoice.invoice} className="group flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 hover:border-primary/30 transition-all cursor-pointer">
                      <Avatar className="size-10 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                        <AvatarFallback className={`bg-gradient-to-br ${invoice.color} text-white text-xs font-bold`}>
                          {invoice.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-semibold truncate">{invoice.client}</p>
                          <Badge variant={
                            invoice.status === "Paid" ? "default" :
                            invoice.status === "Pending" ? "secondary" : "destructive"
                          } className="text-xs">
                            {invoice.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{invoice.case}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{invoice.amount}</p>
                        <p className="text-xs text-muted-foreground">{invoice.invoice}</p>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="size-8">
                          <Eye className="size-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8">
                          <Download className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div className="text-sm text-muted-foreground">
                  Total unpaid: <span className="font-semibold text-foreground">$23,750</span>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <ArrowUpRight className="size-3" />
                  View All Invoices
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Current plan and usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="relative rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary text-primary-foreground">Professional Plan</Badge>
                    <Award className="size-5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$299</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Renews on January 15, 2025</p>
                  <div className="absolute -right-4 -top-4 size-16 rounded-full bg-primary/20 blur-2xl" />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Documents Storage</span>
                      <span className="font-semibold">156.3 GB / 200 GB</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000" style={{ width: "78%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">AI Requests (Month)</span>
                      <span className="font-semibold">2,450 / 5,000</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-1000" style={{ width: "49%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Team Members</span>
                      <span className="font-semibold">12 / 15</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full gap-2">
                  <Sparkles className="size-4" />
                  Upgrade to Enterprise
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="col-span-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Activity Stream</CardTitle>
                    <CardDescription>Recent actions across your practice</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Filter</Button>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "Sarah Mitchell",
                      avatar: "SM",
                      action: "uploaded new documents to case",
                      detail: "Johnson v. Smith Estate",
                      time: "2 minutes ago",
                      icon: <Upload className="size-4 text-blue-600" />,
                      type: "document"
                    },
                    {
                      user: "Michael Chen",
                      avatar: "MC",
                      action: "completed task in",
                      detail: "Review deposition transcripts",
                      time: "15 minutes ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                      type: "task"
                    },
                    {
                      user: "Emily Rodriguez",
                      avatar: "ER",
                      action: "scheduled a court hearing for",
                      detail: "Case #2847 - Merger Agreement",
                      time: "1 hour ago",
                      icon: <Calendar className="size-4 text-purple-600" />,
                      type: "event"
                    },
                    {
                      user: "David Thompson",
                      avatar: "DT",
                      action: "sent invoice #1247 to",
                      detail: "Acme Corporation - $12,450",
                      time: "2 hours ago",
                      icon: <Receipt className="size-4 text-orange-600" />,
                      type: "invoice"
                    },
                    {
                      user: "Jennifer Lee",
                      avatar: "JL",
                      action: "created new case",
                      detail: "IP Infringement - TechStart Inc.",
                      time: "3 hours ago",
                      icon: <Briefcase className="size-4 text-pink-600" />,
                      type: "case"
                    },
                    {
                      user: "System",
                      avatar: "SY",
                      action: "AI analysis completed for",
                      detail: "Contract Review - Merger Agreement",
                      time: "4 hours ago",
                      icon: <BrainCircuit className="size-4 text-cyan-600" />,
                      type: "ai"
                    },
                  ].map((activity) => (
                    <div key={`activity-${activity.user}`} className="group flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 hover:border-primary/30 transition-all">
                      <Avatar className="size-10 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                        <AvatarFallback className={`${
                          activity.type === "document" ? "from-blue-500 to-blue-600" :
                          activity.type === "task" ? "from-green-500 to-green-600" :
                          activity.type === "event" ? "from-purple-500 to-purple-600" :
                          activity.type === "invoice" ? "from-orange-500 to-orange-600" :
                          activity.type === "case" ? "from-pink-500 to-pink-600" :
                          "from-cyan-500 to-cyan-600"
                        } bg-gradient-to-br text-white text-xs font-bold`}>
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">{activity.detail}</p>
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                        <Clock className="size-3" />
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full gap-1">
                  <ArrowUpRight className="size-3" />
                  View All Activity
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Tasks requiring attention</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">5 urgent</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      task: "File court brief for merger case",
                      case: "Merger Agreement #2847",
                      due: "Today, 5:00 PM",
                      priority: "High",
                      color: "from-red-500 to-red-600",
                      icon: <AlertTriangle className="size-4" />
                    },
                    {
                      task: "Client meeting - deposition prep",
                      case: "Johnson v. Smith Estate",
                      due: "Tomorrow, 10:00 AM",
                      priority: "High",
                      color: "from-orange-500 to-orange-600",
                      icon: <CalendarCheck className="size-4" />
                    },
                    {
                      task: "Review AI-generated contract analysis",
                      case: "IP Infringement Case",
                      due: "Wed, 2:00 PM",
                      priority: "Medium",
                      color: "from-yellow-500 to-yellow-600",
                      icon: <BrainCircuit className="size-4" />
                    },
                    {
                      task: "Submit discovery documents",
                      case: "Civil Litigation #2845",
                      due: "Thu, 12:00 PM",
                      priority: "Medium",
                      color: "from-blue-500 to-blue-600",
                      icon: <ClipboardList className="size-4" />
                    },
                    {
                      task: "Follow up on pending invoices",
                      case: "Multiple Clients",
                      due: "Fri, 4:00 PM",
                      priority: "Low",
                      color: "from-green-500 to-green-600",
                      icon: <Receipt className="size-4" />
                    },
                  ].map((item, index) => (
                    <div key={`task-${index}`} className="group flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 hover:border-primary/30 transition-all cursor-pointer">
                      <div className={`flex items-center justify-center size-10 rounded-lg bg-gradient-to-br ${item.color} text-white shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium truncate">{item.task}</p>
                          <Badge variant={item.priority === "High" ? "destructive" : item.priority === "Medium" ? "secondary" : "outline"} className="text-xs shrink-0">
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{item.case}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Clock className="size-3" />
                          {item.due}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full gap-1">
                  <ClipboardList className="size-3" />
                  View All Tasks
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card className="col-span-1 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Practice Metrics</CardTitle>
                <CardDescription>This month's performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Case Win Rate", value: "78%", change: "+5%", trend: "up", icon: <Award className="size-3.5" /> },
                  { label: "Client Satisfaction", value: "4.7/5", change: "+0.3", trend: "up", icon: <Star className="size-3.5" /> },
                  { label: "Avg. Response Time", value: "2.1h", change: "-15%", trend: "down", icon: <Clock className="size-3.5" /> },
                  { label: "Billed Hours", value: "685", change: "+12%", trend: "up", icon: <Timer className="size-3.5" /> },
                  { label: "Collections", value: "94%", change: "+2%", trend: "up", icon: <DollarSign className="size-3.5" /> },
                  { label: "AI Tasks Completed", value: "234", change: "+45%", trend: "up", icon: <Sparkles className="size-3.5" /> },
                ].map((metric, index) => (
                  <div key={`metric-${index}`} className="group space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center size-6 rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {metric.icon}
                        </div>
                        <span className="text-sm font-medium">{metric.label}</span>
                      </div>
                      <span className="text-sm font-bold">{metric.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs ml-8">
                      {metric.trend === "up" ? (
                        <TrendingUp className="size-3 text-green-600" />
                      ) : (
                        <ArrowUpRight className="size-3 text-green-600 rotate-180" />
                      )}
                      <span className={metric.trend === "up" || metric.label.includes("Response") || metric.label.includes("Collections") ? "text-green-600" : "text-red-600"}>
                        {metric.change} from last month
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-3 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Legal Team</CardTitle>
                    <CardDescription>12 active members online now</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="size-3" />
                      Filter
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "John Doe", role: "Senior Attorney", status: "Online", initials: "JD", cases: 8, color: "from-blue-500 to-blue-600" },
                    { name: "Sarah Mitchell", role: "Associate Attorney", status: "Online", initials: "SM", cases: 5, color: "from-purple-500 to-purple-600" },
                    { name: "Michael Chen", role: "Paralegal", status: "In Meeting", initials: "MC", cases: 12, color: "from-green-500 to-green-600" },
                    { name: "Emily Rodriguez", role: "Legal Assistant", status: "Online", initials: "ER", cases: 6, color: "from-orange-500 to-orange-600" },
                    { name: "David Thompson", role: "Partner", status: "Away", initials: "DT", cases: 4, color: "from-pink-500 to-pink-600" },
                    { name: "Jennifer Lee", role: "Special Counsel", status: "Online", initials: "JL", cases: 7, color: "from-cyan-500 to-cyan-600" },
                  ].map((member, index) => (
                    <div key={`member-${index}`} className="group flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="relative">
                        <Avatar className="size-10 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                          <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white text-xs font-bold`}>
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-background ${
                          member.status === "Online" ? "bg-green-500" :
                          member.status === "In Meeting" ? "bg-orange-500" :
                          member.status === "Away" ? "bg-yellow-500" : "bg-gray-500"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-medium text-muted-foreground">{member.cases} cases</div>
                        <Badge variant="outline" className="text-[10px] mt-0.5">
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex -space-x-2">
                    {["JD", "SM", "MC", "ER"].map((initials) => (
                      <Avatar key={initials} className="size-7 border-2 border-background">
                        <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-600 text-white text-[9px] font-bold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex items-center justify-center size-7 rounded-full border-2 border-background bg-muted text-[9px] font-medium">
                      +8
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Users className="size-3" />
                    Manage Team
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>System Alerts</CardTitle>
                    <CardDescription>Important notifications</CardDescription>
                  </div>
                  <Badge variant="destructive" className="animate-pulse">3 new</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      type: "urgent",
                      icon: <AlertTriangle className="size-4 text-red-600" />,
                      iconBg: "bg-red-100",
                      title: "Court filing deadline approaching",
                      message: "Case #2847 requires filing by Dec 18",
                      time: "2 hours ago",
                      action: "View Case"
                    },
                    {
                      type: "warning",
                      icon: <AlertTriangle className="size-4 text-orange-600" />,
                      iconBg: "bg-orange-100",
                      title: "Storage usage at 87%",
                      message: "Consider upgrading or archiving old documents",
                      time: "5 hours ago",
                      action: "Manage Storage"
                    },
                    {
                      type: "info",
                      icon: <Info className="size-4 text-blue-600" />,
                      iconBg: "bg-blue-100",
                      title: "AI model update available",
                      message: "Contract Review AI v2.1 now available",
                      time: "1 day ago",
                      action: "Update Now"
                    },
                    {
                      type: "success",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                      iconBg: "bg-green-100",
                      title: "Daily backup completed",
                      message: "All 1,247 documents successfully backed up",
                      time: "2 days ago",
                      action: "View Logs"
                    },
                  ].map((alert) => (
                    <div key={alert.title} className="group flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 hover:border-primary/30 transition-all">
                      <div className={`flex items-center justify-center size-10 rounded-lg ${alert.iconBg} shrink-0`}>
                        {alert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{alert.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">{alert.message}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-muted-foreground">{alert.time}</span>
                          <Button variant="ghost" size="sm" className="text-xs h-6 px-2 hover:bg-primary/10">
                            {alert.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full gap-1">
                  <Bell className="size-3" />
                  View All Alerts
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div>
                  <CardTitle>Resources & Support</CardTitle>
                  <CardDescription>Help documentation and guides</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { title: "Quick Start Guide", icon: <Book className="size-4" />, description: "Get started in 5 minutes", color: "from-blue-500 to-blue-600" },
                    { title: "AI Documentation", icon: <Sparkles className="size-4" />, description: "Learn to use AI features", color: "from-purple-500 to-purple-600" },
                    { title: "Video Tutorials", icon: <Play className="size-4" />, description: "Watch step-by-step guides", color: "from-green-500 to-green-600" },
                    { title: "Legal Templates", icon: <FileText className="size-4" />, description: "Download document templates", color: "from-orange-500 to-orange-600" },
                    { title: "Knowledge Base", icon: <Lightbulb className="size-4" />, description: "Search help articles", color: "from-pink-500 to-pink-600" },
                    { title: "Contact Support", icon: <MessageSquare className="size-4" />, description: "Get 24/7 assistance", color: "from-cyan-500 to-cyan-600" },
                  ].map((resource, index) => (
                    <Button key={`resource-${index}`} variant="ghost" className="w-full justify-start h-auto py-3 group hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center size-10 rounded-lg bg-gradient-to-br ${resource.color} text-white`}>
                          {resource.icon}
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">{resource.title}</p>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                        </div>
                        <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full gap-1">
                  <Globe2 className="size-3" />
                  Visit Help Center
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>AI Models</CardTitle>
                    <CardDescription>
                      Available machine learning models
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Legal Document Analyzer",
                      type: "NLP",
                      status: "Active",
                      accuracy: "98.5%",
                      usage: "24.5k calls",
                      icon: <BrainCircuit className="size-4" />,
                      description: "Analyzes legal documents for key terms and clauses"
                    },
                    {
                      name: "Contract Review AI",
                      type: "Classification",
                      status: "Active",
                      accuracy: "96.2%",
                      usage: "18.2k calls",
                      icon: <Scale className="size-4" />,
                      description: "Automates contract review and risk assessment"
                    },
                    {
                      name: "Case Prediction Model",
                      type: "ML",
                      status: "Training",
                      accuracy: "92.8%",
                      usage: "8.1k calls",
                      icon: <Gavel className="size-4" />,
                      description: "Predicts case outcomes based on historical data"
                    },
                    {
                      name: "Entity Extraction",
                      type: "NLP",
                      status: "Active",
                      accuracy: "99.1%",
                      usage: "42.3k calls",
                      icon: <Sparkles className="size-4" />,
                      description: "Extracts entities like names, dates, locations"
                    },
                    {
                      name: "Sentiment Analyzer",
                      type: "NLP",
                      status: "Active",
                      accuracy: "94.7%",
                      usage: "15.7k calls",
                      icon: <Zap className="size-4" />,
                      description: "Analyzes sentiment in legal communications"
                    },
                  ].map((model, index) => (
                    <div key={`model-${index}`} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        {model.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium truncate">{model.name}</p>
                          <Badge variant={model.status === "Active" ? "default" : "secondary"} className="text-xs">
                            {model.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{model.description}</p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-muted-foreground">{model.type}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-green-600 font-medium">{model.accuracy}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{model.usage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Database className="mr-2 size-4" />
                  View All Models
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Documents</CardTitle>
                    <CardDescription>
                      Latest legal documents and case files
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Smith v. Johnson - Contract",
                      type: "Contract",
                      size: "2.4 MB",
                      modified: "2 hours ago",
                      status: "Review",
                      icon: <FileText className="size-4" />,
                      tags: ["urgent", "contract"]
                    },
                    {
                      name: "Estate Planning - Williams",
                      type: "Will",
                      size: "1.8 MB",
                      modified: "5 hours ago",
                      status: "Draft",
                      icon: <ScrollText className="size-4" />,
                      tags: ["estate", "draft"]
                    },
                    {
                      name: "Merger Agreement Q4",
                      type: "Agreement",
                      size: "4.2 MB",
                      modified: "1 day ago",
                      status: "Final",
                      icon: <FileCode className="size-4" />,
                      tags: ["merger", "corporate"]
                    },
                    {
                      name: "Deposition Transcript #47",
                      type: "Transcript",
                      size: "8.7 MB",
                      modified: "2 days ago",
                      status: "Archived",
                      icon: <FileSearch className="size-4" />,
                      tags: ["deposition", "transcript"]
                    },
                    {
                      name: "Patent Application #2847",
                      type: "Patent",
                      size: "3.1 MB",
                      modified: "3 days ago",
                      status: "Pending",
                      icon: <FolderOpen className="size-4" />,
                      tags: ["patent", "ip"]
                    },
                  ].map((doc, index) => (
                    <div key={`doc-${index}`} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        {doc.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium truncate">{doc.name}</p>
                          <Badge variant="outline" className="text-xs">{doc.status}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{doc.type} • {doc.size}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {doc.tags.map((tag, tagIndex) => (
                            <Badge key={`tag-${tagIndex}`} variant="secondary" className="text-xs">
                              <Tag className="mr-1 size-3" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {doc.modified}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FolderOpen className="mr-2 size-4" />
                  Browse All Documents
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Document Categories</CardTitle>
                  <CardDescription>
                    Overview of your legal document collection
                  </CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "Contracts", count: 234, icon: <FileText className="size-4" />, color: "bg-blue-500" },
                  { name: "Court Filings", count: 89, icon: <Gavel className="size-4" />, color: "bg-red-500" },
                  { name: "Briefs", count: 156, icon: <ScrollText className="size-4" />, color: "bg-purple-500" },
                  { name: "Wills & Trusts", count: 67, icon: <FileSearch className="size-4" />, color: "bg-green-500" },
                  { name: "Corporate", count: 128, icon: <FileCode className="size-4" />, color: "bg-orange-500" },
                  { name: "Patents", count: 45, icon: <Database className="size-4" />, color: "bg-cyan-500" },
                ].map((category, index) => (
                  <div key={`category-${index}`} className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className={`size-12 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div className="text-lg font-bold">{category.count}</div>
                    <div className="text-xs text-muted-foreground text-center">{category.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>
                Overview of your key performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Projects", value: "24", icon: <Package className="size-4" />, color: "bg-blue-500" },
                  { label: "Completed Tasks", value: "156", icon: <CheckCircle2 className="size-4" />, color: "bg-green-500" },
                  { label: "Pending Reviews", value: "12", icon: <Clock className="size-4" />, color: "bg-yellow-500" },
                  { label: "Team Members", value: "18", icon: <Users className="size-4" />, color: "bg-purple-500" },
                ].map((stat, index) => (
                  <div key={`stat-${index}`} className="flex flex-col items-center text-center p-4 rounded-lg border">
                    <div className={`size-10 rounded-full ${stat.color} flex items-center justify-center mb-2`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
