import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ModuleCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("");

  // Mock certifications - replace with actual data fetching
  const certifications = [
    { id: "1", title: "Web Development Fundamentals" },
    { id: "2", title: "Advanced JavaScript Programming" },
    { id: "3", title: "Full Stack Development" },
    { id: "4", title: "Mobile App Development" },
    { id: "5", title: "Data Science Basics" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error("Please enter a module title");
      return;
    }
    
    if (!selectedCertification) {
      toast.error("Please select a certification");
      return;
    }
    
    // Simulate API call
    toast.success("Module created successfully!");
    navigate("/admin/modules");
  };

  // Mock total duration - will be calculated from chapters
  const totalDuration = 0; // hours

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Module</h1>
        <p className="text-muted-foreground">Create a new learning module</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Module Details */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Module Information</CardTitle>
                <CardDescription>Basic details about your module</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Module Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter module title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what this module covers"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certification Assignment & Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certification Assignment</CardTitle>
                <CardDescription>Assign this module to a certification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Certification</Label>
                  <Select value={selectedCertification} onValueChange={setSelectedCertification}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a certification" />
                    </SelectTrigger>
                    <SelectContent>
                      {certifications.map((cert) => (
                        <SelectItem key={cert.id} value={cert.id}>
                          {cert.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Module Status</CardTitle>
                <CardDescription>Total Duration: {totalDuration} hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Draft</Badge>
                      <span className="text-sm text-muted-foreground">Status</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Module will be created in draft status
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button type="submit" className="w-full">
                Create Module
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/admin/modules")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModuleCreate;