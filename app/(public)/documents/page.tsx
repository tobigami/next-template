import { Metadata } from 'next';
import { dataDocuments } from '@/constant/documents';
import { DocumentCard } from '@/components/DocumentCard';

export const metadata: Metadata = {
  title: 'Documents | Author',
  description: 'Documents page'
};

export default function DocumentsPage() {
  return (
    <div className='py-12 space-y-6'>
      <h1 className='text-4xl font-bold text-center'>Tài liệu</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dataDocuments.map((doc, index) => (
          <DocumentCard key={index} {...doc} />
        ))}
      </div>
    </div>
  );
}
