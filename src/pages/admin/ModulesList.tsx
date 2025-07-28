import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Edit, Trash2, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ModulesList = () => {
  // Mock data - replace with actual data fetching
  const modules = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development with HTML and CSS.",
      chapterCount: 8,
      duration: "6 hours",
      status: "Published",
      chapters: [
        { id: 1, title: "Introduction to HTML", duration: "45 min", thumbnail: "/api/placeholder/120/80" },
        { id: 2, title: "HTML Structure & Elements", duration: "60 min", thumbnail: "/api/placeholder/120/80" },
        { id: 3, title: "CSS Basics", duration: "50 min", thumbnail: "/api/placeholder/120/80" },
        { id: 4, title: "CSS Layout with Flexbox", duration: "70 min", thumbnail: "/api/placeholder/120/80" },
        { id: 5, title: "CSS Grid System", duration: "65 min", thumbnail: "/api/placeholder/120/80" },
        { id: 6, title: "Responsive Design", duration: "55 min", thumbnail: "/api/placeholder/120/80" },
        { id: 7, title: "CSS Animations", duration: "40 min", thumbnail: "/api/placeholder/120/80" },
        { id: 8, title: "Project: Landing Page", duration: "90 min", thumbnail: "/api/placeholder/120/80" },
      ],
    },
    {
      id: 2,
      title: "JavaScript Programming",
      description: "Master JavaScript fundamentals and modern ES6+ features.",
      chapterCount: 12,
      duration: "10 hours",
      status: "Published",
      chapters: [
        { id: 9, title: "JavaScript Basics", duration: "50 min", thumbnail: "/api/placeholder/120/80" },
        { id: 10, title: "Variables & Data Types", duration: "45 min", thumbnail: "/api/placeholder/120/80" },
        { id: 11, title: "Functions & Scope", duration: "60 min", thumbnail: "/api/placeholder/120/80" },
        { id: 12, title: "Objects & Arrays", duration: "55 min", thumbnail: "/api/placeholder/120/80" },
        { id: 13, title: "DOM Manipulation", duration: "70 min", thumbnail: "/api/placeholder/120/80" },
        { id: 14, title: "Event Handling", duration: "45 min", thumbnail: "/api/placeholder/120/80" },
        { id: 15, title: "Promises & Async/Await", duration: "65 min", thumbnail: "/api/placeholder/120/80" },
        { id: 16, title: "ES6+ Features", duration: "50 min", thumbnail: "/api/placeholder/120/80" },
        { id: 17, title: "Error Handling", duration: "40 min", thumbnail: "/api/placeholder/120/80" },
        { id: 18, title: "Local Storage", duration: "35 min", thumbnail: "/api/placeholder/120/80" },
        { id: 19, title: "API Integration", duration: "75 min", thumbnail: "/api/placeholder/120/80" },
        { id: 20, title: "Project: Todo App", duration: "120 min", thumbnail: "/api/placeholder/120/80" },
      ],
    },
    {
      id: 3,
      title: "React Development",
      description: "Build modern web applications with React and its ecosystem.",
      chapterCount: 10,
      duration: "8 hours",
      status: "Draft",
      chapters: [
        { id: 21, title: "React Introduction", duration: "40 min", thumbnail: "/api/placeholder/120/80" },
        { id: 22, title: "Components & JSX", duration: "50 min", thumbnail: "/api/placeholder/120/80" },
        { id: 23, title: "Props & State", duration: "55 min", thumbnail: "/api/placeholder/120/80" },
        { id: 24, title: "Event Handling", duration: "45 min", thumbnail: "/api/placeholder/120/80" },
        { id: 25, title: "Conditional Rendering", duration: "40 min", thumbnail: "/api/placeholder/120/80" },
        { id: 26, title: "Lists & Keys", duration: "35 min", thumbnail: "/api/placeholder/120/80" },
        { id: 27, title: "Forms & Controlled Components", duration: "60 min", thumbnail: "/api/placeholder/120/80" },
        { id: 28, title: "useEffect Hook", duration: "50 min", thumbnail: "/api/placeholder/120/80" },
        { id: 29, title: "Context API", duration: "45 min", thumbnail: "/api/placeholder/120/80" },
        { id: 30, title: "Project: Shopping Cart", duration: "100 min", thumbnail: "/api/placeholder/120/80" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Modules</h1>
          <p className="text-muted-foreground">Manage your learning modules</p>
        </div>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <Card key={module.id} className="group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant={module.status === "Published" ? "default" : "secondary"}>
                      {module.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{module.duration}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {module.chapterCount} chapters
                    </span>
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
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`module-${module.id}`} className="border-none">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline">
                    View Chapters ({module.chapterCount})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
                      {module.chapters.map((chapter) => (
                        <div
                          key={chapter.id}
                          className="group/chapter relative bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/50 transition-colors"
                        >
                          <div className="aspect-video bg-muted relative">
                            <img
                              src={chapter.thumbnail}
                              alt={chapter.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/chapter:opacity-100 transition-opacity flex items-center justify-center">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {chapter.duration}
                            </div>
                          </div>
                          <div className="p-3">
                            <h4 className="text-sm font-medium line-clamp-2">{chapter.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModulesList;