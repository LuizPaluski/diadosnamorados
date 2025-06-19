// src/pages/DiaryPage.tsx

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient'; // Importamos nosso cliente Supabase
import { BookMarked, PlusCircle } from 'lucide-react';

interface Note {
  id: number;
  created_at: string;
  content: string;
}

const DiaryPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar as notas no banco de dados
  const fetchNotes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false }); // Ordena as mais novas primeiro

    if (error) {
      console.error('Erro ao buscar notas:', error);
      setError('Não foi possível carregar as memórias. Tente recarregar a página.');
    } else {
      setNotes(data);
    }
    setLoading(false);
  };

  // Roda a função de busca quando a página carrega
  useEffect(() => {
    fetchNotes();
  }, []);

  // Função para salvar uma nova nota
  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim() === '') return;

    const { data, error } = await supabase
      .from('notes')
      .insert([{ content: newNote }])
      .select();

    if (error) {
      console.error('Erro ao salvar nota:', error);
      setError('Ocorreu um erro ao salvar sua memória.');
    } else if (data) {
      // Adiciona a nova nota à lista na tela, sem precisar recarregar
      setNotes([data[0], ...notes]);
      setNewNote(''); // Limpa o campo de texto
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 animate-fade-in">
        <div className="text-center mb-12">
          <BookMarked className="h-16 w-16 mx-auto text-romantic-rose mb-4" />
          <h1 className="font-parisienne text-5xl md:text-7xl text-romantic-deepRose">
            Nosso Diário Secreto
          </h1>
          <p className="font-garamond text-xl text-romantic-rose mt-2">
            Um lugar para guardar nossos pensamentos, sonhos e memórias.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Formulário para adicionar nova nota */}
          <form onSubmit={handleAddNote} className="mb-8">
            <div className="romantic-card p-4">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full p-2 border-2 border-romantic-blush rounded-lg focus:ring-2 focus:ring-romantic-rose focus:outline-none"
                rows={4}
                placeholder="Escreva uma nova memória ou um pensamento do dia..."
              />
              <button type="submit" className="love-button mt-4 w-full flex items-center justify-center gap-2">
                <PlusCircle size={20} />
                Guardar Memória
              </button>
            </div>
          </form>

          {/* Seção de Notas Salvas */}
          <div className="space-y-6">
            {loading && <p className="text-center">Carregando memórias...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            
            {!loading && notes.length === 0 && (
              <p className="text-center text-gray-500 font-garamond text-lg">Nenhuma memória guardada ainda. Seja a primeira!</p>
            )}
            
            {notes.map((note) => (
              <div key={note.id} className="romantic-card p-6">
                <p className="font-lato text-gray-800">{note.content}</p>
                <p className="text-right text-xs text-gray-400 mt-4">
                  {new Date(note.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiaryPage;