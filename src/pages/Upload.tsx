import { useState } from "react";
import { Upload as UploadIcon, FileAudio, FileVideo, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      const validTypes = ['audio/', 'video/'];
      if (!validTypes.some(type => selectedFile.type.startsWith(type))) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio or video file.",
          variant: "destructive"
        });
        return;
      }
      setFile(selectedFile);
      setIsComplete(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  const processFile = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setIsComplete(true);
    
    toast({
      title: "Processing complete!",
      description: "Your meeting summary is ready for download.",
    });
  };

  const downloadReport = () => {
    toast({
      title: "Download started",
      description: "Your meeting report is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Upload Meeting Recording</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your audio or video files and let AI generate comprehensive meeting insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="slide-up">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Upload File</h2>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center smooth-hover ${
                  dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      {file.type.startsWith('audio/') ? (
                        <FileAudio size={48} className="text-primary" />
                      ) : (
                        <FileVideo size={48} className="text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      onClick={() => setFile(null)}
                      variant="outline"
                      size="sm"
                    >
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <UploadIcon size={48} className="mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Drop your file here, or{" "}
                        <label className="text-primary cursor-pointer hover:underline">
                          browse
                          <input
                            type="file"
                            className="hidden"
                            accept="audio/*,video/*"
                            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                          />
                        </label>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Supports audio and video files up to 500MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {file && !isComplete && (
                <div className="mt-6">
                  <Button
                    onClick={processFile}
                    disabled={isProcessing}
                    className="w-full btn-ocean"
                  >
                    {isProcessing ? "Processing..." : "Generate Summary"}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Summary Section */}
          <div className="slide-up" style={{ animationDelay: "200ms" }}>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                {isComplete ? "Summary Generated" : "Summary Preview"}
              </h2>
              
              {isComplete ? (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="font-medium">Processing Complete!</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Meeting Summary</h3>
                      <p className="text-muted-foreground text-sm">
                        Team discussed Q1 objectives, budget allocation, and upcoming product launches. 
                        Key decisions made regarding marketing strategy and timeline adjustments.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Action Items</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Finalize budget proposal - Due Jan 25</li>
                        <li>• Review marketing materials - Due Jan 22</li>
                        <li>• Schedule client presentation - Due Jan 30</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Important Dates</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Product launch: February 15, 2024</li>
                        <li>• Team offsite: March 10-12, 2024</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button
                    onClick={downloadReport}
                    className="w-full btn-ocean"
                  >
                    <Download size={18} className="mr-2" />
                    Download PDF Report
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 text-center text-muted-foreground">
                  <p>Upload a meeting recording to generate:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Concise meeting summary</li>
                    <li>• Action items with assignees</li>
                    <li>• Important dates and deadlines</li>
                    <li>• Downloadable PDF report</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;