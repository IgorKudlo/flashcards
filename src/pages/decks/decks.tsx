import s from './decks.module.scss';
import { Button, Input, Typography } from '@/components';
import { Tabs } from '@/components/ui/tabs';
import { RangeSlider } from '@/components/range-slider';
import TrashIcon from '@/assets/images/trash-outline.svg';
import { DecksTable } from '@/components/decks-table';

const decks = [
  {
    id: '1',
    name: 'Deck 1',
    updated: '2024-04-26',
    cardsCount: 8,
    createdBy: 'User 1'
  },
  {
    id: '2',
    name: 'Deck 2',
    updated: '2024-03-18',
    cardsCount: 6,
    createdBy: 'User 2'
  }
];

export const Decks = () => {
  return (
    <>
      <div className={s.header}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button type={'button'}>Add New Deck</Button>
      </div>
      <div className={s.filter}>
        <Input type={'search'} placeholder={'Input search'} />
        <div className={s.filterItem}>
          <Typography variant={'body2'}>Show decks cards</Typography>
          <Tabs tabs={['My Cards', 'All Cards']} />
        </div>
        <div className={s.filterItem}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <RangeSlider up={10} min={0} max={8} />
        </div>
        <Button type={'button'} variant={'secondary'} startIcon={<img src={TrashIcon} alt={''} />}>Clear Filter</Button>
      </div>
      <DecksTable decks={decks} />
    </>
  );
};
