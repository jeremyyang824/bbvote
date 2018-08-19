import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const topics = [
      {
        id: 12,
        team: 'SPIRIT',
        speaker: 'Yang, Libin Jeremy',
        title: 'A brief introduction of micro-service technology',
        holdingDate: new Date(2018, 7, 5),
        // tslint:disable-next-line:max-line-length
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content.',
        votes: 18,
        points: 4.25
      },
      {
        id: 11,
        team: 'SPEED',
        speaker: 'Xiao, ming Ming',
        title: 'ECS workflow in CITI',
        holdingDate: new Date(2018, 6, 12),
        // tslint:disable-next-line:max-line-length
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting',
        votes: 3,
        points: 3.65
      },
    ];

    const intentions = [
      {
        id: 12,
        team: 'SPIRIT',
        speaker: 'Yang, Libin Jeremy',
        title: 'Docker in action',
        description: 'Docker in action...',
        votes: 86,
        isMyVoted: true
      },
      {
        id: 13,
        team: 'SPEED',
        speaker: 'Liang, Chaowei Tony',
        title: 'An Actor Prepares',
        description: '~~~',
        votes: 32,
        isMyVoted: false
      },
      {
        id: 14,
        team: 'SPIRIT',
        speaker: 'Zhou, Runfa Jack',
        title: 'Be a good man',
        description: '1212',
        votes: 3,
        isMyVoted: true
      }
    ];

    return { topics, intentions };
  }
}
