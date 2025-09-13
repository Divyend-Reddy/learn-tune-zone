import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  Clock, 
  PlayCircle,
  FileText,
  Award,
  ArrowRight
} from "lucide-react";

const LearningModule = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  const modules = [
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      description: "Introduction to Artificial Intelligence concepts and applications",
      progress: 75,
      duration: "2 hours",
      difficulty: "Beginner",
      status: "in-progress",
      lessons: 8,
      completedLessons: 6
    },
    {
      id: "machine-learning",
      title: "Machine Learning Basics",
      description: "Core ML algorithms and practical implementation",
      progress: 45,
      duration: "3 hours",
      difficulty: "Intermediate",
      status: "in-progress",
      lessons: 12,
      completedLessons: 5
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      description: "Neural networks and deep learning architectures",
      progress: 0,
      duration: "4 hours",
      difficulty: "Advanced",
      status: "locked",
      lessons: 15,
      completedLessons: 0
    }
  ];

  const currentLessons = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      type: "video",
      duration: "15 min",
      completed: true
    },
    {
      id: 2,
      title: "Backpropagation Algorithm",
      type: "reading",
      duration: "20 min",
      completed: true
    },
    {
      id: 3,
      title: "Practical Implementation",
      type: "interactive",
      duration: "25 min",
      completed: false
    },
    {
      id: 4,
      title: "Assessment Quiz",
      type: "quiz",
      duration: "10 min",
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-success";
      case "Intermediate": return "text-warning";
      case "Advanced": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "in-progress": return "secondary";
      case "locked": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-8">
        {!selectedModule ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Learning Modules</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Structured learning paths designed to build your knowledge progressively
              </p>
            </div>

            {/* Learning Path */}
            <div className="grid gap-8 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <Card 
                  key={module.id} 
                  className={`group hover:shadow-elegant transition-smooth ${
                    module.status === "locked" ? "opacity-60" : "cursor-pointer"
                  }`}
                  onClick={() => module.status !== "locked" && setSelectedModule(module.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                            module.status === "completed" 
                              ? "bg-gradient-accent" 
                              : module.status === "in-progress"
                              ? "bg-gradient-primary"
                              : "bg-muted"
                          }`}>
                            {module.status === "completed" ? (
                              <CheckCircle className="h-6 w-6 text-accent-foreground" />
                            ) : module.status === "locked" ? (
                              <BookOpen className="h-6 w-6 text-muted-foreground" />
                            ) : (
                              <Brain className="h-6 w-6 text-primary-foreground" />
                            )}
                          </div>
                          {index < modules.length - 1 && (
                            <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-border transform -translate-x-1/2" />
                          )}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                          <CardDescription className="text-base mb-3">
                            {module.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {module.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {module.lessons} lessons
                            </div>
                            <Badge 
                              variant="outline" 
                              className={getDifficultyColor(module.difficulty)}
                            >
                              {module.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(module.status)}>
                          {module.status.replace("-", " ")}
                        </Badge>
                        {module.status !== "locked" && (
                          <ArrowRight className="h-5 w-5 text-muted-foreground mt-2 group-hover:text-primary transition-smooth" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {module.progress > 0 && (
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{module.completedLessons}/{module.lessons} lessons</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Module Detail View */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedModule(null)}
                className="mb-4"
              >
                ← Back to Modules
              </Button>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {modules.find(m => m.id === selectedModule)?.title}
              </h1>
              <p className="text-muted-foreground">
                {modules.find(m => m.id === selectedModule)?.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Lessons List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Lessons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentLessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          className={`flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-card transition-smooth ${
                            lesson.completed ? "bg-success/5 border-success/20" : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              lesson.completed 
                                ? "bg-gradient-accent" 
                                : "bg-gradient-primary"
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-accent-foreground" />
                              ) : (
                                <PlayCircle className="h-5 w-5 text-primary-foreground" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold">{lesson.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span>{lesson.type}</span>
                                <span>•</span>
                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant={lesson.completed ? "outline" : "default"} 
                            size="sm"
                          >
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Your Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span>6/8 lessons</span>
                        </div>
                        <Progress value={75} className="h-3" />
                      </div>
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold mb-3">Achievements</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span>First Steps Complete</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span>Consistent Learner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Next Recommendation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on your progress, we recommend focusing on practical implementation next.
                    </p>
                    <Button variant="gradient" size="sm" className="w-full">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LearningModule;