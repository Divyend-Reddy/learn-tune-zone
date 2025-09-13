import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Brain, 
  BarChart3, 
  BookOpen, 
  Target,
  TrendingUp,
  Clock,
  Award,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "Introduction to AI.pdf", status: "processed", progress: 100 },
    { id: 2, name: "Machine Learning Basics.pdf", status: "processing", progress: 65 },
  ]);

  const [recentAssessments] = useState([
    { id: 1, title: "AI Fundamentals Quiz", score: 85, date: "2024-01-15", status: "completed" },
    { id: 2, title: "ML Algorithms Test", score: 92, date: "2024-01-12", status: "completed" },
    { id: 3, title: "Deep Learning Assessment", score: null, date: "2024-01-16", status: "pending" },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFile = {
        id: uploadedFiles.length + 1,
        name: files[0].name,
        status: "processing" as const,
        progress: 0
      };
      setUploadedFiles([...uploadedFiles, newFile]);
      
      // Simulate processing
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(file => 
            file.id === newFile.id 
              ? { ...file, progress: 100, status: "processed" as const }
              : file
          )
        );
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Learning Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Student</p>
              </div>
            </div>
            <Button variant="default">
              <Target className="h-4 w-4 mr-2" />
              Set Goals
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm">Total Documents</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <FileText className="h-8 w-8 text-primary-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-accent text-accent-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-accent-foreground/80 text-sm">Assessments Completed</p>
                  <p className="text-2xl font-bold">28</p>
                </div>
                <Brain className="h-8 w-8 text-accent-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Average Score</p>
                  <p className="text-2xl font-bold text-foreground">87%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Study Time</p>
                  <p className="text-2xl font-bold text-foreground">24h</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Learning Materials
                </CardTitle>
                <CardDescription>
                  Upload PDFs and text files to generate personalized assessments and study materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Drop files here or click to upload</h3>
                  <p className="text-muted-foreground mb-4">Support for PDF, DOC, and TXT files</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button asChild variant="default">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      Select Files
                    </label>
                  </Button>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Recently Uploaded</h4>
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          {file.status === "processing" && (
                            <Progress value={file.progress} className="w-32 mt-1" />
                          )}
                        </div>
                      </div>
                      <Badge variant={file.status === "processed" ? "default" : "secondary"}>
                        {file.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessments" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Generate New Assessment
                  </CardTitle>
                  <CardDescription>
                    Create personalized quizzes and tests based on your uploaded materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="gradient" size="lg">
                    Generate Assessment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAssessments.map((assessment) => (
                      <div key={assessment.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-accent-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{assessment.title}</h4>
                            <p className="text-sm text-muted-foreground">{assessment.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {assessment.score && (
                            <div className="text-right">
                              <p className="text-lg font-bold text-success">{assessment.score}%</p>
                              <p className="text-xs text-muted-foreground">Score</p>
                            </div>
                          )}
                          <Badge variant={assessment.status === "completed" ? "default" : "secondary"}>
                            {assessment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Artificial Intelligence</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Machine Learning</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Deep Learning</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Quick Learner</p>
                        <p className="text-sm text-muted-foreground">Completed 5 assessments in a day</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-accent/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-medium">Consistent Improver</p>
                        <p className="text-sm text-muted-foreground">Improved scores for 3 weeks straight</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription>
                  AI-powered suggestions based on your learning patterns and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
                    <h4 className="font-semibold text-primary mb-2">Focus on Deep Learning Fundamentals</h4>
                    <p className="text-muted-foreground mb-3">
                      Your recent assessments show strong performance in ML basics. Consider diving deeper into neural networks and backpropagation.
                    </p>
                    <Button variant="outline" size="sm">Start Studying</Button>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
                    <h4 className="font-semibold text-accent mb-2">Practice More Problem Solving</h4>
                    <p className="text-muted-foreground mb-3">
                      Your theoretical knowledge is excellent, but practicing implementation problems could strengthen your understanding.
                    </p>
                    <Button variant="outline" size="sm">View Exercises</Button>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
                    <h4 className="font-semibold text-success mb-2">Review Sessions Recommended</h4>
                    <p className="text-muted-foreground mb-3">
                      Based on your learning curve, reviewing AI fundamentals next week would optimize retention.
                    </p>
                    <Button variant="outline" size="sm">Schedule Review</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;