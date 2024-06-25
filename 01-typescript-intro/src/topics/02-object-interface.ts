const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const striper: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: 'Cali'

}

console.table(striper);

export{}