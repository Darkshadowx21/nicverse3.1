import { Project } from './types';

// terms of use
const defaultTerms = {
    allowed: [
        'Showcase the Addon/Texture Pack in videos with proper credit to me, notnicto and a link to MCPEDL/CURSEFORGE',
        'Modify the Addon/Texture Pack for personal use',
        'Share the texture pack using the MCPEDL/Curseforge link'
    ],
    prohibited: [
        'Claim the Addon/Texture Pack as your own',
        'Modify the Addon/Texture Pack for public use',
        'Upload the Addon/Texture Pack on any third-party website (Ex: 9Minecraft, MinecraftMods)',
        'Showcase or use the Addon/Texture Pack without providing proper credits',
        'Use mediafire or direct links for downloading the pack'
    ]
};

export const projects: Project[] = [
    {
        id: 'Overhaul',
        title: 'Ultramarine Overhaul V4.3',
        shortDescription: 'Upgrade your Minecraft experience with the Ultramarine Texture Pack!',
        fullDescription: 'Upgrade your Minecraft experience with the Ultramarine Texture Pack! Enjoy enhanced visuals, lag-free gameplay, and exciting new features with an in-built Shader supported by Render Dragon. Compatible with Minecraft Bedrock 1.20.40+.',
        features: [
            'Improved and compact UI',
            'Biome dependent fog',
            'Quick loot',
            'Ore borders',
            'Chat helper, Quick craft, brewing guide',
            'Item durability viewer',
            'Hud clock and compass',
            'Many more features (See in-game changelog)'
        ],
        category: 'texture-pack',
        version: '1.21+',
        size: '11MB',
        stars: 4.8,
        previewImages: [
            '/images/overhaul/overhaul.png',
            '/images/overhaul/overhaul_menu.png',
            '/images/overhaul/overhaul_armor.png',
            '/images/overhaul/overhaul_dimension.png',
            '/images/overhaul/overhaul_crimsonfog.png',
            '/images/overhaul/overhaul_cherryfog.png',
            '/images/overhaul/overhaul_desertfog.png',
            '/images/overhaul/overhaul_junglefog.png',
            '/images/overhaul/overhaul_normal.png',
            '/images/overhaul/overhaul_ore.png',
            '/images/overhaul/overhaul_reimagined.png',
            '/images/overhaul/overhaul_unbound.png',
            '/images/overhaul/overhaul_underwater.png',
            '/images/overhaul/overhaul_warpedfog.png'


        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/texture-packs/ultramarine/download/5844796',
        credits: [
            {
                name: 'Utilities',
                author: 'DrAv0011',
                project: 'Bedrock Tweaks',
                link: 'https://bedrocktweaks.net/'
            },
            {
                name: 'Reimagined Clouds',
                author: 'sparkskye',
                project: 'Stellar Graphics',
                link: 'https://mcpedl.com/stellar-graphics/'
            },
            {
                name: 'Totem doll animation',
                author: 'HyperF3GamerINDO',
                project: 'Femboy Totem',
                link: 'https://mcpedl.com/femboy-totem/'
            }
        ],
        terms: {
            ...defaultTerms,
            prohibited: [
                ...defaultTerms.prohibited,
                'Legal actions will be pursued against those who fail to comply with these terms of use'
            ]
        }
    },
    {
        id: 'Nightfall',
        title: 'Ultramarine Nightfall 2.3',
        shortDescription: 'Best texture pack for Minecraft Bedrock Edition 1.21. Render DragonShader supported.',
        fullDescription: 'Best texture pack for Minecraft Bedrock Edition 1.21. Render DragonShader supported. Custom swords, ore textures, animations, and more. No lag. Perfect for enhancing gameplay.',
        features: [
            'Dark Mode Support',
            'Improved and compact UI',
            'Biome dependent fog effects',
            'Quick loot',
            'Ore borders',
            'Chat helper, Quick craft, brewing guide',
            'Item durability viewer',
            'Hud clock and compass',
            'Many more (Check the changelog section in-game)'
        ],
        category: 'texture-pack',
        version: '1.21+',
        size: '11MB',
        stars: 4.8,
        previewImages: [
            '/images/nightfall/nightfall.png',
            '/images/nightfall/nightfall_main_menu.png',
            '/images/nightfall/nightfall_armor.png',
            '/images/nightfall/nightfall_cherry_fog.png',
            '/images/nightfall/nightfall_crimson_fog.png',
            '/images/nightfall/nightfall_desert_fog.png',
            '/images/nightfall/nightfall_dimension.png',
            '/images/nightfall/nightfall_jungle_fog.png',
            '/images/nightfall/nightfall_normal.png',
            '/images/nightfall/nightfall_ore.png',
            '/images/nightfall/nightfall_reimagined.png',
            '/images/nightfall/nightfall_unbound.png',
            '/images/nightfall/nightfall_underwater_fog.png',
            '/images/nightfall/nightfall_warped_fog.png'
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/texture-packs/ultramarine-nightfall/download/5834734',
        credits: [
            {
                name: 'Utilities',
                author: 'DrAv0011',
                project: 'Bedrock Tweaks',
                link: 'https://bedrocktweaks.net/'
            },
            {
                name: 'Reimagined Clouds',
                author: 'sparkskye',
                project: 'Stellar Graphics',
                link: 'https://mcpedl.com/stellar-graphics/'
            },
            {
                name: 'Totem doll animation',
                author: 'HyperF3GamerINDO',
                project: 'Femboy Totem',
                link: 'https://mcpedl.com/femboy-totem/'
            }
        ],
        terms: defaultTerms
    },
    {
        id: 'Neo',
        title: 'Neo Texture Pack (PVP Update)',
        shortDescription: 'Experience Minecraft in a new light with Neo Texture Pack! Enjoy lag-free gameplay.',
        fullDescription: 'Experience Minecraft in a new light with Neo Texture Pack! Enjoy lag-free gameplay, enhanced visuals, and exciting new features with Render Dragon-supported in-built Shader. Compatible with Minecraft Bedrock 1.20+. Redefine your gaming experience today!',
        features: [
            'Colorful UI',
            'PVP Mode',
            'Smoother textures and particles',
            'Custom sky',
            'Compact settings',
            'FPS counter',
            'Player health indicator',
            'Item durability percentage',
            'Quick settings',
            'Clear & bottom chat',
            'Trading helper, brewing guides, chat tweaks, quick crafting',
            'Brand new particles and Java hit sound',
            'Render dragon-supported shaders',
            'Food hunger and saturation point with effects',
            'Brand new particles'
        ],
        category: 'texture-pack',
        version: '1.21+',
        size: '7.4MB',
        stars: 4.1,
        previewImages: [
            '/images/neo/neo.png',
            '/images/neo/neo_main_menu.png',
            '/images/neo/neo-light.png',
            '/images/neo/neo-ores.png',
            '/images/neo/neo-settings.png',
            '/images/neo/neo-color.png',
            '/images/neo/neo-particles.png'
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/texture-packs/neo-ui-pack-and-shader/download/5847904',
        credits: [
        ],
        terms: defaultTerms
    },
    {
        id: 'QuickLoot',
        title: 'Better Quick Loot',
        shortDescription: 'This pack adds quick loot features for classic UI',
        fullDescription: 'This pack adds quick loot features for classic UI. So u can loot chests or any other container easily on mobile devices like u can do shift-click in pc. Also, there are two more buttons to drop one item at a time or a stack of items at a time.',
        features: [
            'Drop one item at a time',
            'Drop a stack of items at a time'
        ],
        category: 'texture-pack',
        version: '1.20+',
        size: '2MB',
        stars: 4.2,
        previewImages: [
            '/images/quickloot/quick_loot.png',
            '/images/quickloot/quick_loot_plus.png',
            '/images/quickloot/quick_loot_normal.png'
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-loot/download/5876850',
        credits: [],
        terms: defaultTerms
    },
    {
        id: 'notnicto',
        title: 'notnicto-skin-pack',
        shortDescription: 'notnicto skin',
        fullDescription: 'notnicto skin',
        features: [
            'notnicto skin'
        ],
        category: 'skin',
        version: '1.20+',
        size: '2MB',
        stars: 4.2,
        previewImages: [
            '/images/notnicto/notnicto-skin-pack.png',
            '/images/notnicto/notnicto-skin-pack-thumbnail.png',
            '/images/notnicto/notnicto-skin-pack-all-skin.png'
        ],
        downloadUrl: '#',
        credits: [],
        terms: defaultTerms
    },
    {
        id: 'crafteverything',
        title: 'Craft Everything',
        shortDescription: 'This mod will allow you to unlock crafting recipes for uncraftable items and blocks in the game.',
        fullDescription: 'This mod will allow you to unlock crafting recipes for uncraftable items and blocks in the game. There are 80+ new crafting recipes for items like Totem, Enchanted Golden Apple, saddle, elytra, dragon eggs, etc',
        features: [
            'There are many uncraftable items in Minecraft. This mod will allow you to unlock crafting recipes for those items. This mod will make your game easier. There are 60+ new recipes.',
            'This mod does not uses player.json, hence it is compatible with any other mods.'
        ],
        category: 'addon',
        version: '1.20+',
        size: '23kb',
        stars: 4.7,
        previewImages: [
            '/images/crafteverything/craft-everything.png',
            '/images/crafteverything/craft-everthing-ui.png',
            '/images/crafteverything/craft-everthing-settings.png',
            '/images/crafteverything/craft-everything_2.png'
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-loot/download/5876850',
        credits: [],
        terms: defaultTerms
    },
    {
        id: 'Akinator',
        title: 'Akinator',
        shortDescription: 'In this map, The Akinator can guess the Minecraft mob , you are thinking of',
        fullDescription: 'In this map, The Akinator can guess the Minecraft mob , you are thinking of. Just answer some simple yes-no questions and Boom..... That is the mob You thinking of. Hope you will enjoy',
        features: [
            'The Akinator can guess all mobs that can be found in vanilla survival Minecraft world.',
            'Made for multiplayer 🫂',
            'Answer carefully as wrong answers can lead you to wrong mob.',
        ],
        category: 'map',
        version: '1.21+',
        size: '400kb',
        stars: 4.5,
        previewImages: [
            '/images/akinator/Akinator.png  ',
            '/images/akinator/Akinator-start.png',
            '/images/akinator/Akinator-map.png',
            '/images/akinator/Akinator-info.png',
            '/images/akinator/Akinator-screen.png',
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/maps/akinator/download/5582646',
        credits: [],
        terms: defaultTerms
    },
    {
        id: 'Achievements',
        title: 'Achievements World 1.21.50+',
        shortDescription: 'A map designed for Minecraft Bedrock Edition, which helps players complete achievements, was added after version 1.21.',
        fullDescription: 'A map designed for Minecraft Bedrock Edition, which helps players complete achievements, was added after version 1.21. Complete all the achievements added in the Minecraft Tricky Trails update, including ReVaulting, Who Needs Rockets?, Crafters Crafting Crafters, and Over-Overkill in the Bedrock Edition 1.21 update. Completing all four achievements on this map is very easy! Minecraft 1.21 update brings five new achievements to Bedrock Edition.',
        features: [
            'ReVaulting - Unlock this achievement by using a vault',
            'Who Needs Rockets? - Unlock this achievement by using a wind charge to boost your elytra flight',
            'Crafters Crafting Crafters - Unlock this achievement by crafting a crafter',
            'Over-Overkill - Unlock this achievement by dealing 50+ damage in a single hit',
            'Heart transplant',
        ],
        category: 'map',
        version: '1.21+',
        size: '400kb',
        stars: 4.5,
        previewImages: [
            '/images/achievements/achievements-world.png  ',
            '/images/achievements/achievements-world-start.png',
            '/images/achievements/achievements-world-map.png',
            '/images/achievements/achievements-world-info.png',
            '/images/achievements/achievements-world-screen.png',
        ],
        downloadUrl: 'https://www.curseforge.com/minecraft-bedrock/maps/achievements-world/download/5520391',
        credits: [],
        terms: defaultTerms
    },

]; 