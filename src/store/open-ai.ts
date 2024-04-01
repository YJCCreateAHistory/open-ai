import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const useOpenAiStore = create(
  subscribeWithSelector((set: any, get: any) => { 
    
  })
)