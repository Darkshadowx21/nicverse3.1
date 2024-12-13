'use client';

import React from 'react';
import {
  Moon,
  Layout,
  Cloud,
  Boxes,
  Grid3X3,
  MessageSquareText,
  Timer,
  Compass,
  Package,
  CircleDot,
  Palette,
  Swords,
  Image,
  Settings,
  Gauge,
  Heart,
  Percent,
  Sliders,
  MessageSquare,
  Sparkles,
  Wand2,
  Apple,
  Trophy,
  Rocket,
  Hammer,
  Zap,
  HeartPulse,
  Brain,
  Users,
  AlertCircle,
  BookOpen,
  Check
} from 'lucide-react';

interface FeaturePreviewProps {
  features: string[];
}

// Map feature names to icons with colors
const featureIcons: Record<string, React.ReactNode> = {
  // Overhaul & Nightfall Features
  'Dark Mode Support': <Moon className="w-5 h-5 text-purple-500" />,
  'Improved and compact UI': <Layout className="w-5 h-5 text-blue-500" />,
  'Biome dependent fog': <Cloud className="w-5 h-5 text-sky-500" />,
  'Biome dependent fog effects': <Cloud className="w-5 h-5 text-sky-500" />,
  'Quick loot': <Boxes className="w-5 h-5 text-amber-500" />,
  'Ore borders': <Grid3X3 className="w-5 h-5 text-emerald-500" />,
  'Chat helper, Quick craft, brewing guide': <MessageSquareText className="w-5 h-5 text-indigo-500" />,
  'Item durability viewer': <Timer className="w-5 h-5 text-rose-500" />,
  'Hud clock and compass': <Compass className="w-5 h-5 text-cyan-500" />,

  // QuickLoot Features
  'Drop one item at a time': <Package className="w-5 h-5 text-blue-500" />,
  'Drop a stack of items at a time': <Boxes className="w-5 h-5 text-indigo-500" />,

  // Neo pvp features
  'Colorful UI': <Palette className="w-5 h-5 text-pink-500" />,
  'PVP Mode': <Swords className="w-5 h-5 text-red-500" />,
  'Smoother textures and particles': <Image className="w-5 h-5 text-violet-500" />,
  'Custom sky': <Cloud className="w-5 h-5 text-blue-400" />,
  'Compact settings': <Settings className="w-5 h-5 text-gray-500" />,
  'FPS counter': <Gauge className="w-5 h-5 text-green-500" />,
  'Player health indicator': <Heart className="w-5 h-5 text-red-500" />,
  'Item durability percentage': <Percent className="w-5 h-5 text-orange-500" />,
  'Quick settings': <Sliders className="w-5 h-5 text-blue-500" />,
  'Clear & bottom chat': <MessageSquare className="w-5 h-5 text-purple-500" />,
  'Trading helper, brewing guides, chat tweaks, quick crafting': <MessageSquareText className="w-5 h-5 text-indigo-500" />,
  'Brand new particles and Java hit sound': <Sparkles className="w-5 h-5 text-yellow-500" />,
  'Render dragon-supported shaders': <Wand2 className="w-5 h-5 text-purple-400" />,
  'Food hunger and saturation point with effects': <Apple className="w-5 h-5 text-red-400" />,
  'Brand new particles': <Sparkles className="w-5 h-5 text-amber-500" />,

  // Achievements Features 
  'ReVaulting - Unlock this achievement by using a vault': <Trophy className="w-5 h-5 text-yellow-500" />,
  'Who Needs Rockets? - Unlock this achievement by using a wind charge to boost your elytra flight': <Rocket className="w-5 h-5 text-blue-500" />,
  'Crafters Crafting Crafters - Unlock this achievement by crafting a crafter': <Hammer className="w-5 h-5 text-orange-500" />,
  'Over-Overkill - Unlock this achievement by dealing 50+ damage in a single hit': <Zap className="w-5 h-5 text-red-500" />,
  'Heart transplant': <HeartPulse className="w-5 h-5 text-pink-500" />,

  // Akinator Features
  'The Akinator can guess all mobs that can be found in vanilla survival Minecraft world.': <Brain className="w-5 h-5 text-violet-500" />,
  'Made for multiplayer 🫂': <Users className="w-5 h-5 text-green-500" />,
  'Answer carefully as wrong answers can lead you to wrong mob.': <AlertCircle className="w-5 h-5 text-yellow-500" />,

  // Crafting Recipes Features
  'There are many uncraftable items in Minecraft. This mod will allow you to unlock crafting recipes for those items. This mod will make your game easier. There are 60+ new recipes.': <BookOpen className="w-5 h-5 text-amber-500" />,
  'This mod does not uses player.json, hence it is compatible with any other mods.': <Check className="w-5 h-5 text-green-500" />,
};

export function FeaturePreview({ features }: FeaturePreviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center">
            {featureIcons[feature] || <CircleDot className="w-5 h-5 text-muted-foreground" />}
          </div>
          <span className="text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>
  );
} 