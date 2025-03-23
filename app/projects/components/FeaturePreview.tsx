'use client';

import React from 'react';
import {
  Moon, Layout, Cloud, Boxes, Grid3X3, MessageSquareText, Timer, 
  Compass, Package, CircleDot, Palette, Swords, Image, Settings, 
  Gauge, Heart, Percent, MessageSquare, Sparkles, Wand2, 
  Apple, Trophy, Rocket, Hammer, Users, AlertCircle, BookOpen, Check,
  Brain, Zap, HeartPulse, MessageCircle, HandshakeIcon, 
  UserCircle, Download, ShieldCheck, Puzzle, Box, Wind, Monitor
} from 'lucide-react';

// Common icon styles
const iconStyle = "w-5 h-5";

// Add this after imports
interface FeaturePreviewProps {
  features: string[];
}

const featureIcons: Record<string, React.ReactNode> = {
  // Overhaul & Nightfall Features
  'Improved and compact UI': <Layout className={`${iconStyle} text-blue-500`} />,
  'Biome dependent fog': <Cloud className={`${iconStyle} text-sky-500`} />,
  'Biome dependent fog effects': <Cloud className={`${iconStyle} text-sky-500`} />,
  'Quick loot': <Boxes className={`${iconStyle} text-amber-500`} />,
  'Ore borders': <Grid3X3 className={`${iconStyle} text-emerald-500`} />,
  'Chat helper, Quick craft, brewing guide': <MessageSquareText className={`${iconStyle} text-indigo-500`} />,
  'Item durability viewer': <Timer className={`${iconStyle} text-rose-500`} />,
  'Hud clock and compass': <Compass className={`${iconStyle} text-cyan-500`} />,
  'Many more features': <Sparkles className={`${iconStyle} text-purple-500`} />,
  'Dark Mode Support': <Moon className={`${iconStyle} text-purple-500`} />,

  // Neo Features
  'Colorful UI': <Palette className={`${iconStyle} text-pink-500`} />,
  'PVP Mode': <Swords className={`${iconStyle} text-red-500`} />,
  'Smoother textures and particles': <Image className={`${iconStyle} text-violet-500`} />,
  'Custom sky': <Cloud className={`${iconStyle} text-blue-400`} />,
  'Compact settings': <Settings className={`${iconStyle} text-gray-500`} />,
  'FPS counter': <Gauge className={`${iconStyle} text-green-500`} />,
  'Player health indicator': <Heart className={`${iconStyle} text-red-500`} />,
  'Item durability percentage': <Percent className={`${iconStyle} text-orange-500`} />,
  'Quick settings': <Settings className={`${iconStyle} text-gray-500`} />,
  'Clear & bottom chat': <MessageSquare className={`${iconStyle} text-purple-500`} />,
  'Trading helper, brewing guides, chat tweaks, quick crafting': <MessageSquareText className={`${iconStyle} text-indigo-500`} />,
  'Brand new particles and Java hit sound': <Sparkles className={`${iconStyle} text-yellow-500`} />,
  'Render dragon-supported shaders': <Wand2 className={`${iconStyle} text-purple-400`} />,
  'Food hunger and saturation point with effects': <Apple className={`${iconStyle} text-red-400`} />,
  'Brand new particles': <Sparkles className={`${iconStyle} text-amber-500`} />,

  // QuickLoot Features
  'Drop one item at a time': <Package className={`${iconStyle} text-blue-500`} />,
  'Drop a stack of items at a time': <Boxes className={`${iconStyle} text-indigo-500`} />,

  // Skin Features
  'notnicto skin': <Users className={`${iconStyle} text-orange-500`} />,

  // Craft Everything Features
  'There are many uncraftable items in Minecraft. This mod will allow you to unlock crafting recipes for those items. This mod will make your game easier. There are 60+ new recipes.': <BookOpen className={`${iconStyle} text-amber-500`} />,
  'This mod does not uses player.json, hence it is compatible with any other mods.': <Check className={`${iconStyle} text-green-500`} />,

  // Akinator Features
  'The Akinator can guess all mobs that can be found in vanilla survival Minecraft world.': <Brain className={`${iconStyle} text-violet-500`} />,
  'Made for multiplayer 🫂': <Users className={`${iconStyle} text-green-500`} />,
  'Answer carefully as wrong answers can lead you to wrong mob.': <AlertCircle className={`${iconStyle} text-yellow-500`} />,

  // Shadow Smash Features
  'Custom sky 🌌': <Cloud className={`${iconStyle} text-blue-400`} />,
  'Quick crafting ⚒️': <Hammer className={`${iconStyle} text-orange-500`} />,
  'Quick chat 💬': <MessageSquare className={`${iconStyle} text-purple-500`} />,
  'Quick settings ⚙️ (cam perspective, FOV, render distance etc)': <Settings className={`${iconStyle} text-gray-500`} />,
  'Trade preview': <Users className={`${iconStyle} text-green-500`} />,
  'Hit particles ✨': <Sparkles className={`${iconStyle} text-pink-500`} />,
  'Block breaking animations': <Hammer className={`${iconStyle} text-red-500`} />,
  'Outlined ores': <Grid3X3 className={`${iconStyle} text-emerald-500`} />,
  'Invisible item frames': <Image className={`${iconStyle} text-gray-400`} />,
  'Dragon wings elytra': <Rocket className={`${iconStyle} text-purple-400`} />,
  'Crown 👑 model instead of golden helmet': <Trophy className={`${iconStyle} text-yellow-500`} />,
  'Animated totem!': <Sparkles className={`${iconStyle} text-amber-500`} />,

  // Achievements Features
  'ReVaulting': <Trophy className={`${iconStyle} text-yellow-500`} />,
  'Who Needs Rockets?': <Rocket className={`${iconStyle} text-blue-500`} />,
  'Crafters Crafting Crafters': <Hammer className={`${iconStyle} text-orange-500`} />,
  'Over-Overkill': <Zap className={`${iconStyle} text-red-500`} />,
  'Heart transplant': <HeartPulse className={`${iconStyle} text-pink-500`} />,

  // Talking Villager Features
  'Funny random dialogues 💬': <MessageCircle className={`${iconStyle} text-purple-500`} />,
  'Casual villager chats': <Users className={`${iconStyle} text-blue-500`} />,
  'Achievement friendly': <Trophy className={`${iconStyle} text-yellow-500`} />,
  'Enhanced interactions': <HandshakeIcon className={`${iconStyle} text-green-500`} />,
  'Perfect for solo play': <UserCircle className={`${iconStyle} text-orange-500`} />,
  'Easy to install': <Download className={`${iconStyle} text-blue-400`} />,
  'No gameplay changes': <ShieldCheck className={`${iconStyle} text-red-500`} />,
  'Compatible with other packs': <Puzzle className={`${iconStyle} text-indigo-500`} />,

  // New Nightfall Features
  'Colorful Containers': <Box className={`${iconStyle} text-amber-500`} />,
  'Cape physics': <Wind className={`${iconStyle} text-blue-400`} />,
  'Added f1 button and fps counter': <Monitor className={`${iconStyle} text-gray-500`} />,
  'Glowing trims and colourful enchants': <Sparkles className={`${iconStyle} text-purple-400`} />,
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
            {featureIcons[feature] || <CircleDot className={`${iconStyle} text-muted-foreground`} aria-hidden="true" />}
          </div>
          <span className="text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>
  );
} 