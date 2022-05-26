import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  data = {
    name: 'Chris Wanstrath',
    repositoriesNum: 107,
    followersNum: 21423,
    blogUrl: 'http://chriswanstrath.com/',
    profileUrl: 'https://github.com/defunkt',
    repositoriesDTO: [
      {
        repoName: 'ace',
        htmlUrl: 'https://github.com/defunkt/ace',
        createdAt: '2011-06-07T18:41:40Z',
        endedAt: '2011-11-16T18:37:42Z',
        description: 'Ajax.org Cloud9 Editor',
        language: 'JavaScript',
        forksCount: 7,
        starsCount: 16
      },
      {
        repoName: 'acts_as_textiled',
        htmlUrl: 'https://github.com/defunkt/acts_as_textiled',
        createdAt: '2008-03-12T06:20:18Z',
        endedAt: '2011-07-21T21:38:47Z',
        description: 'Makes your models act as textiled.',
        language: 'Ruby',
        forksCount: 35,
        starsCount: 114
      },
      {
        repoName: 'ambition',
        htmlUrl: 'https://github.com/defunkt/ambition',
        createdAt: '2008-01-14T06:28:56Z',
        endedAt: '2015-04-24T00:18:24Z',
        description: 'include Enumerable — Unmaintained',
        language: 'Ruby',
        forksCount: 25,
        starsCount: 162
      },
      {
        repoName: 'ambitious_activeldap',
        htmlUrl: 'https://github.com/defunkt/ambitious_activeldap',
        createdAt: '2008-01-30T19:20:08Z',
        endedAt: '2008-03-26T19:10:57Z',
        description: 'Ambition adapter for ActiveLdap',
        language: 'Ruby',
        forksCount: 6,
        starsCount: 9
      },
      {
        repoName: 'ambitious_activerecord',
        htmlUrl: 'https://github.com/defunkt/ambitious_activerecord',
        createdAt: '2008-04-26T09:10:20Z',
        endedAt: '2008-04-26T10:14:04Z',
        description: 'Unmaintained Ambitious ActiveRecord adapter, for Ambition.',
        language: 'Ruby',
        forksCount: 4,
        starsCount: 13
      },
      {
        repoName: 'barefootexamples',
        htmlUrl: 'https://github.com/defunkt/barefootexamples',
        createdAt: '2008-03-17T06:29:50Z',
        endedAt: '2008-03-26T20:57:13Z',
        description: 'null',
        language: 'Ruby',
        forksCount: 5,
        starsCount: 6
      },
      {
        repoName: 'body_matcher',
        htmlUrl: 'https://github.com/defunkt/body_matcher',
        createdAt: '2008-05-11T04:54:44Z',
        endedAt: '2008-05-11T04:54:46Z',
        description: 'Simplify your view testing. Forget assert_select.',
        language: 'Ruby',
        forksCount: 2,
        starsCount: 9
      },
      {
        repoName: 'burn',
        htmlUrl: 'https://github.com/defunkt/burn',
        createdAt: '2009-08-26T01:31:54Z',
        endedAt: '2009-08-26T02:13:06Z',
        description: 'Sinatra => Campfire',
        language: 'null',
        forksCount: 3,
        starsCount: 6
      },
      {
        repoName: 'cache_fu',
        htmlUrl: 'https://github.com/defunkt/cache_fu',
        createdAt: '2008-01-23T00:28:10Z',
        endedAt: '2009-10-04T01:54:43Z',
        description: 'Ghost from Christmas past. Unmaintained.',
        language: 'Ruby',
        forksCount: 78,
        starsCount: 254
      },
      {
        repoName: 'cheat',
        htmlUrl: 'https://github.com/defunkt/cheat',
        createdAt: '2008-03-12T06:09:09Z',
        endedAt: '2015-11-17T19:31:56Z',
        description: 'Cheating is fun!',
        language: 'Ruby',
        forksCount: 44,
        starsCount: 237
      },
      {
        repoName: 'cheat.el',
        htmlUrl: 'https://github.com/defunkt/cheat.el',
        createdAt: '2008-08-23T06:01:37Z',
        endedAt: '2008-12-03T23:55:16Z',
        description: 'Cheat Emacs mode',
        language: 'Emacs Lisp',
        forksCount: 4,
        starsCount: 14
      },
      {
        repoName: 'choice',
        htmlUrl: 'https://github.com/defunkt/choice',
        createdAt: '2008-04-25T18:30:30Z',
        endedAt: '2016-12-14T05:29:58Z',
        description: 'Choice is a gem for defining and parsing command line options with a friendly DSL.',
        language: 'Ruby',
        forksCount: 22,
        starsCount: 175
      },
      {
        repoName: 'cijoe',
        htmlUrl: 'https://github.com/defunkt/cijoe',
        createdAt: '2009-08-06T00:20:39Z',
        endedAt: '2011-10-01T22:56:55Z',
        description: 'CI Joe is a fun Continuous Integration server. Unmaintained.',
        language: 'Ruby',
        forksCount: 137,
        starsCount: 1049
      },
      {
        repoName: 'coffee-mode',
        htmlUrl: 'https://github.com/defunkt/coffee-mode',
        createdAt: '2010-03-07T08:30:40Z',
        endedAt: '2020-03-15T11:33:46Z',
        description: 'Emacs Major Mode for CoffeeScript',
        language: 'Emacs Lisp',
        forksCount: 157,
        starsCount: 569
      },
      {
        repoName: 'colored',
        htmlUrl: 'https://github.com/defunkt/colored',
        createdAt: '2009-11-28T06:16:20Z',
        endedAt: '2021-05-11T08:46:47Z',
        description: 'Colors in your terminal. Unmaintained.',
        language: 'Ruby',
        forksCount: 44,
        starsCount: 264
      },
      {
        repoName: 'currency_converter',
        htmlUrl: 'https://github.com/defunkt/currency_converter',
        createdAt: '2008-04-24T09:34:31Z',
        endedAt: '2008-04-24T09:36:14Z',
        description: 'null',
        language: 'Objective-C',
        forksCount: 4,
        starsCount: 8
      },
      {
        repoName: 'd3',
        htmlUrl: 'https://github.com/defunkt/d3',
        createdAt: '2014-04-08T18:45:26Z',
        endedAt: '2014-04-08T18:46:26Z',
        description: 'A JavaScript visualization library for HTML and SVG.',
        language: 'JavaScript',
        forksCount: 1,
        starsCount: 4
      },
      {
        repoName: 'defunkt.github.com',
        htmlUrl: 'https://github.com/defunkt/defunkt.github.com',
        createdAt: '2008-12-17T07:53:14Z',
        endedAt: '2020-12-17T10:53:01Z',
        description: 'My GitHub Page',
        language: 'null',
        forksCount: 56,
        starsCount: 73
      },
      {
        repoName: 'djangode',
        htmlUrl: 'https://github.com/defunkt/djangode',
        createdAt: '2010-04-25T16:41:30Z',
        endedAt: '2010-04-25T16:42:56Z',
        description: 'Utilities functions for node.js that borrow some useful concepts from Django',
        language: 'JavaScript',
        forksCount: 3,
        starsCount: 9
      },
      {
        repoName: 'dodgeball.github.com',
        htmlUrl: 'https://github.com/defunkt/dodgeball.github.com',
        createdAt: '2011-09-24T03:01:09Z',
        endedAt: '2011-09-24T03:01:22Z',
        description: 'yes',
        language: 'Ruby',
        forksCount: 6,
        starsCount: 10
      },
      {
        repoName: 'dotenv',
        htmlUrl: 'https://github.com/defunkt/dotenv',
        createdAt: '2012-07-24T21:43:19Z',
        endedAt: '2012-07-24T04:30:34Z',
        description: 'Loads environment variables from `.env`. ',
        language: 'Ruby',
        forksCount: 3,
        starsCount: 10
      },
      {
        repoName: 'dotjs',
        htmlUrl: 'https://github.com/defunkt/dotjs',
        createdAt: '2011-02-07T07:01:33Z',
        endedAt: '2018-07-26T16:09:13Z',
        description: '~/.js',
        language: 'Ruby',
        forksCount: 371,
        starsCount: 3164
      },
      {
        repoName: 'electron-wordwrap',
        htmlUrl: 'https://github.com/defunkt/electron-wordwrap',
        createdAt: '2008-10-29T20:03:17Z',
        endedAt: '2008-10-29T20:28:21Z',
        description: 'null',
        language: 'null',
        forksCount: 4,
        starsCount: 5
      },
      {
        repoName: 'emacs',
        htmlUrl: 'https://github.com/defunkt/emacs',
        createdAt: '2008-08-19T10:50:19Z',
        endedAt: '2011-10-25T21:53:46Z',
        description: 'My Emacs config',
        language: 'Emacs Lisp',
        forksCount: 46,
        starsCount: 185
      },
      {
        repoName: 'email_reply_parser',
        htmlUrl: 'https://github.com/defunkt/email_reply_parser',
        createdAt: '2011-12-16T23:13:05Z',
        endedAt: '2011-12-16T23:13:24Z',
        description: 'null',
        language: 'Ruby',
        forksCount: 5,
        starsCount: 7
      },
      {
        repoName: 'evilbot',
        htmlUrl: 'https://github.com/defunkt/evilbot',
        createdAt: '2010-12-14T08:09:11Z',
        endedAt: '2011-02-16T07:34:00Z',
        description: 'an evil bot that\'s definitely not for convore',
        language: 'CoffeeScript',
        forksCount: 16,
        starsCount: 48
      },
      {
        repoName: 'exception_logger',
        htmlUrl: 'https://github.com/defunkt/exception_logger',
        createdAt: '2008-01-14T03:32:19Z',
        endedAt: '2016-01-01T04:57:28Z',
        description: 'Unmaintained. Sorry.',
        language: 'Ruby',
        forksCount: 92,
        starsCount: 241
      },
      {
        repoName: 'facebox',
        htmlUrl: 'https://github.com/defunkt/facebox',
        createdAt: '2008-02-11T22:49:27Z',
        endedAt: '2013-07-15T19:55:04Z',
        description: 'Facebook-style lightbox, built in jQuery',
        language: 'JavaScript',
        forksCount: 417,
        starsCount: 1942
      },
      {
        repoName: 'faceup',
        htmlUrl: 'https://github.com/defunkt/faceup',
        createdAt: '2012-07-28T02:11:56Z',
        endedAt: '2012-07-28T02:40:26Z',
        description: 'More than just mustaches.',
        language: 'JavaScript',
        forksCount: 6,
        starsCount: 10
      },
      {
        repoName: 'fixture_scenarios_builder',
        htmlUrl: 'https://github.com/defunkt/fixture_scenarios_builder',
        createdAt: '2008-03-12T06:24:02Z',
        endedAt: '2008-11-12T22:58:39Z',
        description: 'Build your fixtures in Ruby.',
        language: 'Ruby',
        forksCount: 6,
        starsCount: 14
      }
    ],
    contributionsDTOs: [
      {contributedTo: 'Project 1 name', commitNum: 210},
      {contributedTo: 'Project 2 name', commitNum: 115}
    ],
    organizationDTOs: [
      {loginName: 'Login Name', description: 'lorem ipsum'},
      {loginName: 'Login Name', description: 'lorem ipsum'},
      {loginName: 'Login Name', description: 'lorem ipsum'}
    ],
    languages: {
      CoffeeScript: 3.3333333,
      null: 10.0,
      JavaScript: 16.666666,
      'Objective-C': 3.3333333,
      Ruby: 56.666668,
      'Emacs Lisp': 10.0
    }
  };

  constructor(public service: ResumeService) {
  }

  ngOnInit(): void {
    console.log(this.service.data);
  }
}
