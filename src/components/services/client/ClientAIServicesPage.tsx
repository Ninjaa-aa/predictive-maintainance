'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ServiceModal from '@/components/services/client/ServiceModal';
import { Service } from '@/types/service.types';

interface SelectedService {
  service: Service;
  rect: DOMRect;
}

interface Props {
  children: React.ReactNode;
}

export default function ClientInsightAIServices({ children }: Props) {
  const [selected, setSelected] = useState<SelectedService | null>(null);

  const handleSelect = (service: Service, rect: DOMRect) => {
    setSelected({ service, rect });
  };

  return (
    <>
      {React.cloneElement(children as React.ReactElement, {
        onServiceSelect: handleSelect,
      })}
      
      <AnimatePresence>
        {selected && (
          <ServiceModal
            service={selected.service}
            onClose={() => setSelected(null)}
            originRect={selected.rect}
          />
        )}
      </AnimatePresence>
    </>
  );
}