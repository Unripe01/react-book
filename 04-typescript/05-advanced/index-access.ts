const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

type PermsChar = keyof typeof permissions;
type PermsNum = typeof permissions[PermsChar];


const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
type Species = typeof species[number]; // 'rabbit' | 'bear' | 'fox' | 'dog'

