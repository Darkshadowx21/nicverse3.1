"use client";
import { useState } from 'react';
import WindowsGuide from './guide/WindowsGuide';
import AndroidGuide from './guide/AndroidGuide';
import IOSGuide from './guide/IOSGuide';

export default function InstallationGuide() {
    const [activeGuide, setActiveGuide] = useState('windows');

    return (
        <div className="space-y-6">
            <div className="flex space-x-4">
                <button
                    onClick={() => setActiveGuide('windows')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeGuide === 'windows'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    Windows
                </button>
                <button
                    onClick={() => setActiveGuide('android')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeGuide === 'android'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    Android
                </button>
                <button
                    onClick={() => setActiveGuide('ios')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        activeGuide === 'ios'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    iOS
                </button>
            </div>
            <div className="bg-white dark:bg-gray-800/90 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                {activeGuide === 'windows' && <WindowsGuide />}
                {activeGuide === 'android' && <AndroidGuide />}
                {activeGuide === 'ios' && <IOSGuide />}
            </div>
        </div>
    );
} 