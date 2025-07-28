import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CertificationsList = () => {
  // Mock data - replace with actual data fetching
  const certifications = [
    {
      id: 1,
      title: "Web Development Certification",
      description: "Complete certification in modern web development covering all essential technologies.",
      moduleCount: 5,
      duration: "24 hours",
      status: "Published",
      modules: [
        { id: 1, title: "HTML & CSS Fundamentals", duration: "6 hours" },
        { id: 2, title: "JavaScript Programming", duration: "8 hours" },
        { id: 3, title: "React Development", duration: "6 hours" },
        { id: 4, title: "Backend Integration", duration: "4 hours" },
      ],
    },
    {
      id: 2,
      title: "Data Science Certification",
      description: "Comprehensive data science certification with Python, machine learning, and analytics.",
      moduleCount: 4,
      duration: "36 hours",
      status: "Draft",
      modules: [
        { id: 5, title: "Python Programming", duration: "8 hours" },
        { id: 6, title: "Data Analysis & Visualization", duration: "10 hours" },
        { id: 7, title: "Machine Learning", duration: "12 hours" },
        { id: 8, title: "Advanced Analytics", duration: "6 hours" },
      ],
    },
    {
      id: 3,
      title: "Mobile Development Certification",
      description: "Complete certification in mobile app development for iOS and Android platforms.",
      moduleCount: 3,
      duration: "18 hours",
      status: "Published",
      modules: [
        { id: 9, title: "React Native Fundamentals", duration: "6 hours" },
        { id: 10, title: "Advanced Mobile Development", duration: "8 hours" },
        { id: 11, title: "App Deployment & Publishing", duration: "4 hours" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
          <p className="text-muted-foreground">Manage your certifications</p>
        </div>
        <Link to="/admin/certifications/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Certification
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification) => (
          <Card key={certification.id} className="group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{certification.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant={certification.status === "Published" ? "default" : "secondary"}>
                      {certification.status}
                    </Badge>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <Button size="icon" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{certification.description}</CardDescription>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Modules in this certification:</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {certification.modules.map((module) => (
                    <div key={module.id} className="flex justify-between items-center text-xs p-2 rounded bg-muted/50">
                      <span className="font-medium">{module.title}</span>
                      <span className="text-muted-foreground">{module.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{certification.moduleCount} modules</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{certification.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificationsList;