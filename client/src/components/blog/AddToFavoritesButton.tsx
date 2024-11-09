import React from 'react';
import { Bookmark } from 'lucide-react';

declare global {
    interface Window {
        sidebar: {
            addPanel: (title: string, url: string, unused: string) => void;
        };
    }
}

const AddToFavoritesButton: React.FC = () => {
    const addToFavorites = () => {
        const url = window.location.href;
        const title = document.title;

        if (window.sidebar && window.sidebar.addPanel) {
            // Per Firefox versione precedente
            window.sidebar.addPanel(title, url, '');
        } else {
            // Per altri browser
            alert('Premi Ctrl+D (Cmd+D su Mac) per aggiungere questa pagina ai preferiti.');
        }
    };

    return (
        <Bookmark onClick={addToFavorites} className="h-4 w-4 mr-2 hover:text-yellow-500" />
    );
};

export default AddToFavoritesButton;