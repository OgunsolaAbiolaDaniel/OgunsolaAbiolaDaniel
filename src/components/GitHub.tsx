
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitCommit, GitBranch, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubStats = {
  totalCommits: number;
  repositories: number;
  pullRequests: number;
  currentStreak: number;
};

const GitHub = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [stats, setStats] = useState<GitHubStats>({
    totalCommits: 0,
    repositories: 0,
    pullRequests: 0,
    currentStreak: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        // This is a simulation of fetching real GitHub data
        // In a real application, you'd use the GitHub API with proper authentication
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // For demonstration, generate some realistic looking data
        // In production, replace with actual GitHub API calls
        const mockContributions = generateMockContributions();
        setContributions(mockContributions);
        
        // Calculate total commits
        const totalCommits = mockContributions.reduce((sum, contrib) => sum + contrib.count, 0);
        
        // Fetch repo count (simulation)
        const repoCount = Math.floor(Math.random() * 10) + 5;
        
        // Fetch PR count (simulation)
        const prCount = Math.floor(Math.random() * 40) + 10;
        
        // Calculate streak (simulation)
        const streak = calculateStreak(mockContributions);
        
        setStats({
          totalCommits,
          repositories: repoCount,
          pullRequests: prCount,
          currentStreak: streak
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        toast({
          title: "Failed to load GitHub data",
          description: "Could not retrieve your GitHub activity information.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubData();
  }, [toast]);
  
  // Calculate streak from contributions
  const calculateStreak = (contributions: Contribution[]): number => {
    let currentStreak = 0;
    const today = new Date();
    
    // Start from yesterday and count backwards
    for (let i = contributions.length - 2; i >= 0; i--) {
      const contrib = contributions[i];
      if (contrib.count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }
    
    return currentStreak;
  };
  
  // Generate mock contributions data (for demonstration)
  const generateMockContributions = (): Contribution[] => {
    const today = new Date();
    const contributions: Contribution[] = [];
    
    // Generate data for the last 365 days
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      
      // Random contribution count (more recent dates have higher probability of contributions)
      const recencyFactor = 1 - (i / 365);
      const randomFactor = Math.random();
      let count = 0;
      
      if (randomFactor < 0.3 + (recencyFactor * 0.4)) {
        count = Math.floor(Math.random() * 10) + 1;
      }
      
      // Determine activity level based on count
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0) {
        if (count < 3) level = 1;
        else if (count < 5) level = 2;
        else if (count < 8) level = 3;
        else level = 4;
      }
      
      contributions.push({
        date: date.toISOString().split('T')[0],
        count,
        level
      });
    }
    
    return contributions;
  };
  
  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "bg-gray-100 dark:bg-gray-800";
      case 1: return "bg-portfolio-primary/30 dark:bg-portfolio-primary/30";
      case 2: return "bg-portfolio-primary/50 dark:bg-portfolio-primary/50";
      case 3: return "bg-portfolio-primary/70 dark:bg-portfolio-primary/70";
      case 4: return "bg-portfolio-primary dark:bg-portfolio-primary";
      default: return "bg-gray-100 dark:bg-gray-800";
    }
  };
  
  return (
    <section id="github" className="section-container bg-slate-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="section-title">GitHub Activity</h2>
        
        <Button asChild variant="outline" className="mt-4 md:mt-0">
          <a 
            href="https://github.com/OgunsolaAbiolaDaniel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={18} />
            Visit My GitHub
          </a>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="card-hover backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Commits</CardTitle>
            <CardDescription>Total contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <GitCommit className="h-10 w-10 text-portfolio-primary mr-4" />
              {loading ? (
                <div className="h-8 w-20 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
              ) : (
                <span className="text-3xl font-bold">{stats.totalCommits}</span>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Repositories</CardTitle>
            <CardDescription>Public projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Github className="h-10 w-10 text-portfolio-primary mr-4" />
              {loading ? (
                <div className="h-8 w-20 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
              ) : (
                <span className="text-3xl font-bold">{stats.repositories}</span>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Pull Requests</CardTitle>
            <CardDescription>Open & merged</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <GitPullRequest className="h-10 w-10 text-portfolio-primary mr-4" />
              {loading ? (
                <div className="h-8 w-20 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
              ) : (
                <span className="text-3xl font-bold">{stats.pullRequests}</span>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Current Streak</CardTitle>
            <CardDescription>Days of activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <GitBranch className="h-10 w-10 text-portfolio-primary mr-4" />
              {loading ? (
                <div className="h-8 w-20 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
              ) : (
                <span className="text-3xl font-bold">{stats.currentStreak}</span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="card-hover backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
        <CardHeader>
          <CardTitle>Contribution Activity</CardTitle>
          <CardDescription>
            {loading ? (
              <div className="h-6 w-48 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              contributions.length > 0 
                ? `${new Date(contributions[0].date).toLocaleDateString()} - ${new Date(contributions[contributions.length-1].date).toLocaleDateString()}`
                : "No contribution data available"
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-32 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <div className="grid grid-flow-col gap-1 min-w-[1000px]">
                  {Array.from({ length: 52 }, (_, weekIndex) => (
                    <div key={weekIndex} className="grid grid-flow-row gap-1">
                      {Array.from({ length: 7 }, (_, dayIndex) => {
                        const contribIndex = (weekIndex * 7) + dayIndex;
                        const contrib = contributions[contribIndex];
                        
                        return (
                          <div 
                            key={dayIndex}
                            title={contrib ? `${contrib.count} contributions on ${contrib.date}` : "No data"}
                            className={`h-3 w-3 rounded-sm ${contrib ? getContributionColor(contrib.level) : "bg-gray-100 dark:bg-gray-800"}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end items-center mt-4 text-sm text-gray-500">
                <span className="mr-2">Less</span>
                <div className={`h-3 w-3 rounded-sm ${getContributionColor(0)}`} />
                <div className={`h-3 w-3 rounded-sm ml-1 ${getContributionColor(1)}`} />
                <div className={`h-3 w-3 rounded-sm ml-1 ${getContributionColor(2)}`} />
                <div className={`h-3 w-3 rounded-sm ml-1 ${getContributionColor(3)}`} />
                <div className={`h-3 w-3 rounded-sm ml-1 ${getContributionColor(4)}`} />
                <span className="ml-2">More</span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      <div className="text-center mt-6 text-sm text-gray-500">
        <p>Note: For a fully functional GitHub activity tracker, the application would need to use the GitHub API with proper authentication.</p>
      </div>
    </section>
  );
};

export default GitHub;
