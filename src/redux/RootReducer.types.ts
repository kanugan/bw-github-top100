export interface RootReducerState {
    reposInfo?: ReposInfo;
    commitsInfo?: {
        [key: string]: CommitsInfo
    };
}

export interface CommitInfo {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: any;
    author: string;
    committer: string;
    parents: string;
    repository: string;
    score: number;
}

export interface CommitsInfo {
    incomplete_results: boolean;
    items: Array<CommitInfo>;
    total_count: number;
}

export interface ReposInfo {
    incomplete_results: boolean;
    items: Array<RepoInfo>;
    total_count: number;
}

export interface RepoInfo {
    id: string;
    node_id: string;
    name: string;
    full_name: string;
    private: string;
    owner: string;
    html_url: string;
    description: string;
    fork: string;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: string;
    stargazers_count: string;
    watchers_count: string;
    language: string;
    has_issues: string;
    has_projects: string;
    has_downloads: string;
    has_wiki: string;
    has_pages: string;
    forks_count: string;
    mirror_url: string;
    archived: string;
    disabled: string;
    open_issues_count: string;
    license: string;
    forks: string;
    open_issues: string;
    watchers: string;
    default_branch: string;
    score: number;
}

export enum RootReducerActions {
    SAVE_REPOS_INFO = 'SAVE_REPOS_INFO',
    SAVE_COMMITS_INFO = 'SAVE_COMMITS_INFO'
}