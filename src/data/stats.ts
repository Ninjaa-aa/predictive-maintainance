import { Stat } from "@/types/stats.types";

export const predictiveMaintStats: Stat[] = [
    {
      id: "prevention",
      value: 94.5,
      label: "Failure Prevention Rate",
      suffix: "%",
      description: "Equipment failures prevented through early detection",
      icon: "fluent:shield-checkmark-24-filled",
      color: "from-red-400/80 to-rose-500/80",
      trend: {
        value: 15,
        isPositive: true,
        description: "improvement this year"
      }
    },
    {
      id: "downtime",
      value: 85,
      label: "Downtime Reduction",
      suffix: "%",
      description: "Decrease in unplanned equipment downtime",
      icon: "fluent:timer-24-filled",
      color: "from-rose-400/80 to-red-500/80",
      trend: {
        value: 23,
        isPositive: true,
        description: "vs. reactive maintenance"
      }
    },
    {
      id: "accuracy",
      value: 98.2,
      suffix: "%",
      label: "Prediction Accuracy",
      description: "Maintenance need prediction accuracy rate",
      icon: "fluent:brain-circuit-24-filled",
      color: "from-red-400/80 to-rose-500/80",
      trend: {
        value: 8,
        isPositive: true,
        description: "vs. last quarter"
      }
    },
    {
      id: "maintenance",
      value: 72,
      suffix: "%",
      label: "Cost Reduction",
      description: "Reduction in maintenance costs",
      icon: "fluent:money-hand-24-filled",
      color: "from-rose-400/80 to-red-500/80",
      trend: {
        value: 12,
        isPositive: true,
        description: "annual savings"
      }
    }
  ];