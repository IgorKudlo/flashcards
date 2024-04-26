import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components';

type Deck = {
  id: string
  name: string
  updated: string
  cardsCount: number
  createdBy: string
}

type DecksTableProps = {
  decks: Deck[];
}

export const DecksTable = (props: DecksTableProps) => {
  const { decks } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Cards</TableHeadCell>
          <TableHeadCell>Last Updated</TableHeadCell>
          <TableHeadCell>Created By</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {decks.map((deck) => (
          <TableRow key={deck.id}>
            <TableCell>{deck.name}</TableCell>
            <TableCell>{deck.cardsCount}</TableCell>
            <TableCell>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</TableCell>
            <TableCell>{deck.createdBy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
