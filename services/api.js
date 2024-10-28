import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eyawxdlfkapuievsdsvo.supabase.co/rest/v1',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YXd4ZGxma2FwdWlldnNkc3ZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDEzNjY5NCwiZXhwIjoyMDQ1NzEyNjk0fQ.FJkr3G4U9XxlmMFt8Y7E2ysVLi-3DFX6lWTAiAn4TUI',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YXd4ZGxma2FwdWlldnNkc3ZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDEzNjY5NCwiZXhwIjoyMDQ1NzEyNjk0fQ.FJkr3G4U9XxlmMFt8Y7E2ysVLi-3DFX6lWTAiAn4TUI',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' 
  }
});
