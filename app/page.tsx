import { useTranslations } from 'next-intl';
import CustomButton from '@/components/shared/custom-button';
import Container from '@/components/ui/container';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <Container>
      <h1>{t('title')}</h1>
      <CustomButton>{t('button')}</CustomButton>
    </Container>
  );
}
