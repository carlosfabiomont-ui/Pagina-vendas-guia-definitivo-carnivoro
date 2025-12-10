import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ChatStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}