import * as TabsRadix from '@radix-ui/react-tabs';
import s from './tabs.module.scss';
import { Typography } from '@/components';

export type TabsProps = {
  tabs: string[]
}

export const Tabs = (props: TabsProps) => {
  const { tabs } = props;
  
  return (
    <TabsRadix.Root className={s.tabs} defaultValue={tabs[0]}>
      <TabsRadix.List className={s.tabsList}>
        {tabs.map(tab => (
          <TabsRadix.Trigger className={s.tab} value={tab} key={tab}>
            <Typography variant={'body2'}>{tab}</Typography>
          </TabsRadix.Trigger>
        ))}
      </TabsRadix.List>
    </TabsRadix.Root>
  );
};

