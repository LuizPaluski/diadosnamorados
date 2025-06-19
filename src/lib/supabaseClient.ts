// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

// --- SUBSTITUA PELOS SEUS DADOS ---
const supabaseUrl = 'https://zfotzitxwyhcadpraupg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpmb3R6aXR4d3loY2FkcHJhdXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDMxOTEsImV4cCI6MjA2NTkxOTE5MX0.2qb4z_9kaBrfbBQfToLy8wM0bF2c0wWLndjmmnUb8xw';
// ---------------------------------

export const supabase = createClient(supabaseUrl, supabaseAnonKey);