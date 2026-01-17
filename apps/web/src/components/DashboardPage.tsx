import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  CircleDashed,
  CreditCard,
  DollarSign,
  Package,
  Plus,
  Search,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Settings,
  AlertTriangle,
  Clock,
  Globe,
  HelpCircle,
  Mail,
  RefreshCw,
  Activity,
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="size-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        <main className="flex-1 space-y-6 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Sales
                </CardTitle>
                <CreditCard className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <TrendingUp className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                  Monthly revenue breakdown by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 pt-4">
                  {[
                    { category: "Product A", revenue: 45000, percentage: 45 },
                    { category: "Product B", revenue: 32000, percentage: 32 },
                    { category: "Product C", revenue: 18000, percentage: 18 },
                    { category: "Product D", revenue: 5000, percentage: 5 },
                  ].map((item) => (
                    <div key={`revenue-${item.category}`}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">${item.revenue.toLocaleString()}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 size-4" />
                    Create New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 size-4" />
                    Upload Document
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 size-4" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="mr-2 size-4" />
                    Create Invoice
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 size-4" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      Your latest financial activities
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only">View All</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alice Johnson",
                      type: "Payment",
                      amount: "$2,400.00",
                      status: "Completed",
                      date: "2 min ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                    },
                    {
                      name: "Bob Smith",
                      type: "Subscription",
                      amount: "$49.00",
                      status: "Active",
                      date: "15 min ago",
                      icon: <CircleDashed className="size-4 text-blue-600" />,
                    },
                    {
                      name: "Carol White",
                      type: "Refund",
                      amount: "$120.00",
                      status: "Processing",
                      date: "1 hour ago",
                      icon: <CircleDashed className="size-4 text-orange-600" />,
                    },
                    {
                      name: "David Brown",
                      type: "Payment",
                      amount: "$3,500.00",
                      status: "Completed",
                      date: "2 hours ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                    },
                    {
                      name: "Eva Green",
                      type: "Subscription",
                      amount: "$99.00",
                      status: "Active",
                      date: "3 hours ago",
                      icon: <CircleDashed className="size-4 text-blue-600" />,
                    },
                  ].map((transaction) => (
                    <div key={transaction.name} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {transaction.name.split(" ")[0][0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.type} • {transaction.amount}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {transaction.icon}
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
                <CardDescription>
                  Your subscription details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plan</span>
                    <Badge>Pro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next billing</span>
                    <span className="font-medium">Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-medium">$29.00</span>
                  </div>
                </div>
                <Separator />
                <Button className="w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Activity Feed</CardTitle>
                    <CardDescription>
                      Recent updates and notifications
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="size-4" />
                    <span className="sr-only">Refresh</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "John Doe",
                      action: "uploaded a new document",
                      detail: "Q4 Financial Report.pdf",
                      time: "2 minutes ago",
                      icon: <Upload className="size-4" />,
                    },
                    {
                      user: "Sarah Miller",
                      action: "completed task",
                      detail: "Review client contracts",
                      time: "15 minutes ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                    },
                    {
                      user: "Mike Johnson",
                      action: "commented on",
                      detail: "Project Alpha discussion",
                      time: "1 hour ago",
                      icon: <Mail className="size-4 text-blue-600" />,
                    },
                    {
                      user: "Emily Chen",
                      action: "updated",
                      detail: "Dashboard metrics",
                      time: "2 hours ago",
                      icon: <Activity className="size-4 text-purple-600" />,
                    },
                    {
                      user: "Alex Turner",
                      action: "created",
                      detail: "New team workspace",
                      time: "3 hours ago",
                      icon: <Plus className="size-4 text-orange-600" />,
                    },
                  ].map((activity, index) => (
                    <div key={`activity-${index}`} className="flex items-start gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="text-xs">
                          {activity.user.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="size-3" />
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>
                  Tasks due this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { task: "Review quarterly report", priority: "High", due: "Today", color: "bg-red-500" },
                    { task: "Team standup meeting", priority: "Medium", due: "Tomorrow", color: "bg-yellow-500" },
                    { task: "Client presentation prep", priority: "High", due: "Wed", color: "bg-red-500" },
                    { task: "Code review session", priority: "Low", due: "Thu", color: "bg-green-500" },
                    { task: "Sprint planning", priority: "Medium", due: "Fri", color: "bg-yellow-500" },
                  ].map((item, index) => (
                    <div key={`task-${index}`} className="flex items-center gap-3 p-3 rounded-lg border">
                      <div className={`size-2 rounded-full ${item.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.task}</p>
                        <p className="text-xs text-muted-foreground">{item.due}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{item.priority}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Tasks
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Key metrics this month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Response Time", value: "1.2s", change: "+12%", trend: "up" },
                  { label: "Uptime", value: "99.9%", change: "+0.1%", trend: "up" },
                  { label: "Errors", value: "0.2%", change: "-15%", trend: "down" },
                  { label: "Satisfaction", value: "4.8", change: "+0.3", trend: "up" },
                ].map((metric, index) => (
                  <div key={`metric-${index}`} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <span className="font-medium">{metric.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      {metric.trend === "up" ? (
                        <TrendingUp className="size-3 text-green-600" />
                      ) : (
                        <ArrowUpRight className="size-3 text-red-600 rotate-180" />
                      )}
                      <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>
                      Active team members
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "John Doe", role: "Project Manager", status: "Online" },
                    { name: "Sarah Miller", role: "Developer", status: "Online" },
                    { name: "Mike Johnson", role: "Designer", status: "Away" },
                    { name: "Emily Chen", role: "QA Engineer", status: "Online" },
                    { name: "Alex Turner", role: "DevOps", status: "Offline" },
                    { name: "Lisa Park", role: "Product Owner", status: "Online" },
                  ].map((member, index) => (
                    <div key={`member-${index}`} className="flex items-center gap-3 p-3 rounded-lg border">
                      <Avatar>
                        <AvatarFallback>
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <div className={`size-2 rounded-full ${
                        member.status === "Online" ? "bg-green-500" :
                        member.status === "Away" ? "bg-yellow-500" : "bg-gray-500"
                      }`} />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Manage Team
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>
                  System notifications and warnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: "warning", message: "Storage usage approaching 90%", time: "2 hours ago" },
                    { type: "error", message: "Database connection timeout", time: "5 hours ago" },
                    { type: "info", message: "New feature deployment scheduled", time: "1 day ago" },
                    { type: "success", message: "Backup completed successfully", time: "2 days ago" },
                  ].map((alert, index) => (
                    <div key={`alert-${index}`} className="flex items-start gap-3 p-3 rounded-lg border">
                      {alert.type === "warning" && <AlertTriangle className="size-4 text-yellow-600" />}
                      {alert.type === "error" && <AlertTriangle className="size-4 text-red-600" />}
                      {alert.type === "info" && <Info className="size-4 text-blue-600" />}
                      {alert.type === "success" && <CheckCircle2 className="size-4 text-green-600" />}
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Help & Resources</CardTitle>
                <CardDescription>
                  Quick access to documentation and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Getting Started Guide", icon: <Book className="size-4" />, description: "Learn the basics" },
                    { title: "API Documentation", icon: <Globe className="size-4" />, description: "API reference" },
                    { title: "Video Tutorials", icon: <Play className="size-4" />, description: "Watch and learn" },
                    { title: "Contact Support", icon: <HelpCircle className="size-4" />, description: "Get help" },
                    { title: "Community Forum", icon: <Users className="size-4" />, description: "Join discussion" },
                  ].map((resource, index) => (
                    <Button key={`resource-${index}`} variant="ghost" className="w-full justify-start h-auto py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-muted">
                          {resource.icon}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium">{resource.title}</p>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                        </div>
                        <ChevronRight className="ml-auto size-4 text-muted-foreground" />
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
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
